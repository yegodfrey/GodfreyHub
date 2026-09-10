import fs from "node:fs";
import path from "node:path";
import { PNG } from "pngjs";

interface Bounds { left: number; top: number; right: number; bottom: number }
interface Pixel { r: number; g: number; b: number; a: number }

interface VisualIssue {
  id: string;
  message: string;
}

export interface VisualCompareResult {
  status: "passed" | "failed";
  summary: {
    checks: number;
    passed: number;
    failed: number;
    mismatchRatio?: number;
  };
  issues: VisualIssue[];
  reportJson: string;
  reportMarkdown: string;
}

function readJson(file: string): any {
  return JSON.parse(fs.readFileSync(file, "utf8").replace(/^\uFEFF/, ""));
}

function parseBounds(value: unknown): Bounds | null {
  if (typeof value !== "string") return null;
  const match = value.match(/^\[(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)\]\[(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)\]$/);
  if (!match) return null;
  return { left: Number(match[1]), top: Number(match[2]), right: Number(match[3]), bottom: Number(match[4]) };
}

function walkNodes(node: any, out: any[]): void {
  if (!node || typeof node !== "object") return;
  out.push(node);
  const children = Array.isArray(node.children) ? node.children : [];
  for (const child of children) walkNodes(child, out);
}

function findLayoutNode(layout: any, id: string, exact: boolean): any | null {
  const nodes: any[] = [];
  walkNodes(layout, nodes);
  const matches = nodes.filter((node) => {
    const value = String(node?.attributes?.id ?? node?.id ?? "");
    return exact ? value === id : value.includes(id);
  });
  if (matches.length !== 1) return null;
  return matches[0];
}

function layoutContainmentCheck(layout: any, rule: any): string | null {
  const match = rule?.match ?? {};
  const nodeId = String(match.id ?? "");
  const node = findLayoutNode(layout, nodeId, match.exact !== false);
  if (!node) return "semantic node is missing or not unique: " + nodeId;
  const bounds = parseBounds(node?.attributes?.bounds ?? node?.bounds);
  if (!bounds) return "semantic node has invalid bounds: " + nodeId;
  const viewport = parseBounds(layout?.attributes?.bounds ?? layout?.bounds);
  if (!viewport) return "visual checkpoint has invalid viewport bounds";

  const inset = Math.max(0, Number(rule.inset ?? 0));
  const tolerance = Math.max(0, Number(rule.tolerance ?? 0));
  const contained = bounds.left >= viewport.left + inset - tolerance &&
    bounds.top >= viewport.top + inset - tolerance &&
    bounds.right <= viewport.right - inset + tolerance &&
    bounds.bottom <= viewport.bottom - inset + tolerance;
  if (!contained) {
    return `bounds [${bounds.left},${bounds.top}][${bounds.right},${bounds.bottom}] leave viewport ` +
      `[${viewport.left},${viewport.top}][${viewport.right},${viewport.bottom}] (inset ${inset})`;
  }

  const width = bounds.right - bounds.left;
  const height = bounds.bottom - bounds.top;
  const viewportWidth = viewport.right - viewport.left;
  const viewportHeight = viewport.bottom - viewport.top;
  const minWidth = Math.max(Number(rule.minWidth ?? 0), viewportWidth * Number(rule.minWidthRatio ?? 0));
  const minHeight = Math.max(Number(rule.minHeight ?? 0), viewportHeight * Number(rule.minHeightRatio ?? 0));
  if (width < minWidth) return `width ${width} is below required ${minWidth}`;
  if (height < minHeight) return `height ${height} is below required ${minHeight}`;
  return null;
}

function layoutSeparationCheck(layout: any, rule: any): string | null {
  const firstMatch = rule?.first ?? {};
  const secondMatch = rule?.second ?? {};
  const firstId = String(firstMatch.id ?? ""), secondId = String(secondMatch.id ?? "");
  const first = findLayoutNode(layout, firstId, firstMatch.exact !== false);
  const second = findLayoutNode(layout, secondId, secondMatch.exact !== false);
  if (!first) return "semantic node is missing or not unique: " + firstId;
  if (!second) return "semantic node is missing or not unique: " + secondId;
  const firstBounds = parseBounds(first?.attributes?.bounds ?? first?.bounds);
  const secondBounds = parseBounds(second?.attributes?.bounds ?? second?.bounds);
  if (!firstBounds) return "semantic node has invalid bounds: " + firstId;
  if (!secondBounds) return "semantic node has invalid bounds: " + secondId;

  const gap = Math.max(0, Number(rule.minGap ?? 0));
  const axis = String(rule.axis ?? "horizontal");
  const separated = axis === "vertical"
    ? firstBounds.bottom + gap <= secondBounds.top || secondBounds.bottom + gap <= firstBounds.top
    : firstBounds.right + gap <= secondBounds.left || secondBounds.right + gap <= firstBounds.left;
  if (axis !== "horizontal" && axis !== "vertical") return "axis must be horizontal or vertical";
  return separated ? null : `${firstId} and ${secondId} overlap on the ${axis} axis (required gap ${gap})`;
}

function pixelAt(image: PNG, x: number, y: number): Pixel {
  const safeX = Math.max(0, Math.min(image.width - 1, Math.round(x)));
  const safeY = Math.max(0, Math.min(image.height - 1, Math.round(y)));
  const offset = (safeY * image.width + safeX) * 4;
  return { r: image.data[offset], g: image.data[offset + 1], b: image.data[offset + 2], a: image.data[offset + 3] };
}

function distance(a: Pixel, b: Pixel): number {
  const dr = a.r - b.r, dg = a.g - b.g, db = a.b - b.b, da = a.a - b.a;
  return Math.sqrt(dr * dr + dg * dg + db * db + da * da);
}

function medianPixel(samples: Pixel[]): Pixel {
  const median = (values: number[]) => values.sort((a, b) => a - b)[Math.floor(values.length / 2)];
  return {
    r: median(samples.map((sample) => sample.r)),
    g: median(samples.map((sample) => sample.g)),
    b: median(samples.map((sample) => sample.b)),
    a: median(samples.map((sample) => sample.a)),
  };
}

function maxDistanceInRect(image: PNG, reference: Pixel, left: number, top: number, right: number, bottom: number): number {
  let maximum = 0;
  const x0 = Math.max(0, Math.floor(left)), y0 = Math.max(0, Math.floor(top));
  const x1 = Math.min(image.width - 1, Math.ceil(right)), y1 = Math.min(image.height - 1, Math.ceil(bottom));
  for (let y = y0; y <= y1; y++) {
    for (let x = x0; x <= x1; x++) maximum = Math.max(maximum, distance(pixelAt(image, x, y), reference));
  }
  return maximum;
}

function roundedRectangleCheck(image: PNG, layout: any, rule: any): string | null {
  const match = rule?.match ?? {};
  const node = findLayoutNode(layout, String(match.id ?? ""), match.exact !== false);
  if (!node) return "semantic node is missing or not unique: " + String(match.id ?? "");
  const bounds = parseBounds(node?.attributes?.bounds ?? node?.bounds);
  if (!bounds) return "semantic node has invalid bounds: " + String(match.id ?? "");
  const width = bounds.right - bounds.left;
  const height = bounds.bottom - bounds.top;
  if (width < 4 || height < 4) return "semantic node is too small for a rendered shape check";
  const size = Math.min(width, height);
  const radius = Math.max(2, size * Number(rule.radiusRatio ?? 0.25));
  const inset = Math.max(1, size * Number(rule.sampleInsetRatio ?? 0.025));
  const inner = Math.max(inset + 1, radius * 0.82);
  const minDelta = Number(rule.minSurfaceDelta ?? 2);
  const minCornerSeparation = Number(rule.minCornerSeparation ?? 1);
  const samples = [
    [[bounds.left + inset, bounds.top + inset], [bounds.left + inner, bounds.top + inner]],
    [[bounds.right - inset, bounds.top + inset], [bounds.right - inner, bounds.top + inner]],
    [[bounds.left + inset, bounds.bottom - inset], [bounds.left + inner, bounds.bottom - inner]],
    [[bounds.right - inset, bounds.bottom - inset], [bounds.right - inner, bounds.bottom - inner]],
  ];
  const center = pixelAt(image, (bounds.left + bounds.right) / 2, (bounds.top + bounds.bottom) / 2);
  let separated = 0;
  for (const [cornerPoint, innerPoint] of samples) {
    const corner = pixelAt(image, cornerPoint[0], cornerPoint[1]);
    const inside = pixelAt(image, innerPoint[0], innerPoint[1]);
    if (distance(corner, inside) >= minDelta && distance(corner, center) >= minCornerSeparation) separated++;
  }
  const required = Number(rule.requiredCorners ?? 4);
  return separated >= required ? null : `only ${separated}/${required} corners retain a distinct rounded cut-out`;
}

function roundedOutlineCheck(image: PNG, layout: any, rule: any): string | null {
  const match = rule?.match ?? {};
  const node = findLayoutNode(layout, String(match.id ?? ""), match.exact !== false);
  if (!node) return "semantic node is missing or not unique: " + String(match.id ?? "");
  const bounds = parseBounds(node?.attributes?.bounds ?? node?.bounds);
  if (!bounds) return "semantic node has invalid bounds: " + String(match.id ?? "");
  const width = bounds.right - bounds.left, height = bounds.bottom - bounds.top;
  if (width < 8 || height < 8) return "semantic node is too small for a rendered outline check";
  const size = Math.min(width, height);
  const radius = Math.max(4, size * Number(rule.radiusRatio ?? 0.25));
  const band = Math.max(2, size * Number(rule.strokeSearchRatio ?? 0.025));
  const clearDepth = Math.max(2, size * Number(rule.cornerClearRatio ?? 0.025));
  const minStrokeDelta = Number(rule.minStrokeDelta ?? 12);
  const interior = medianPixel([
    pixelAt(image, bounds.left + width * 0.18, bounds.top + height * 0.50),
    pixelAt(image, bounds.left + width * 0.82, bounds.top + height * 0.50),
    pixelAt(image, bounds.left + width * 0.35, bounds.top + height * 0.28),
    pixelAt(image, bounds.left + width * 0.65, bounds.top + height * 0.72),
  ]);
  const edgeSpan = Math.max(4, Math.min(width, height) * 0.20);
  const edgeDeltas = [
    maxDistanceInRect(image, interior, (bounds.left + bounds.right) / 2 - edgeSpan, bounds.top - band,
      (bounds.left + bounds.right) / 2 + edgeSpan, bounds.top + band),
    maxDistanceInRect(image, interior, (bounds.left + bounds.right) / 2 - edgeSpan, bounds.bottom - band,
      (bounds.left + bounds.right) / 2 + edgeSpan, bounds.bottom + band),
    maxDistanceInRect(image, interior, bounds.left - band, (bounds.top + bounds.bottom) / 2 - edgeSpan,
      bounds.left + band, (bounds.top + bounds.bottom) / 2 + edgeSpan),
    maxDistanceInRect(image, interior, bounds.right - band, (bounds.top + bounds.bottom) / 2 - edgeSpan,
      bounds.right + band, (bounds.top + bounds.bottom) / 2 + edgeSpan),
  ];
  const requiredEdges = Number(rule.requiredEdges ?? 4);
  const renderedEdges = edgeDeltas.filter((delta) => delta >= minStrokeDelta).length;
  if (renderedEdges < requiredEdges) return `only ${renderedEdges}/${requiredEdges} outline edges are visibly rendered`;

  const corners = [
    { sx: 1, sy: 1, x: bounds.left, y: bounds.top },
    { sx: -1, sy: 1, x: bounds.right, y: bounds.top },
    { sx: 1, sy: -1, x: bounds.left, y: bounds.bottom },
    { sx: -1, sy: -1, x: bounds.right, y: bounds.bottom },
  ];
  let rounded = 0;
  for (const corner of corners) {
    const sharpLeft = corner.sx > 0 ? corner.x - 1 : corner.x - clearDepth;
    const sharpRight = corner.sx > 0 ? corner.x + clearDepth : corner.x + 1;
    const sharpTop = corner.sy > 0 ? corner.y - 1 : corner.y - clearDepth;
    const sharpBottom = corner.sy > 0 ? corner.y + clearDepth : corner.y + 1;
    const sharpDelta = maxDistanceInRect(image, interior, sharpLeft, sharpTop, sharpRight, sharpBottom);
    let arcDelta = 0;
    const centerX = corner.x + corner.sx * radius, centerY = corner.y + corner.sy * radius;
    const start = Math.max(clearDepth, radius * 0.12), end = radius * 0.65;
    const x0 = corner.sx > 0 ? corner.x + start : corner.x - end;
    const x1 = corner.sx > 0 ? corner.x + end : corner.x - start;
    const y0 = corner.sy > 0 ? corner.y + start : corner.y - end;
    const y1 = corner.sy > 0 ? corner.y + end : corner.y - start;
    for (let y = Math.max(0, Math.floor(y0)); y <= Math.min(image.height - 1, Math.ceil(y1)); y++) {
      for (let x = Math.max(0, Math.floor(x0)); x <= Math.min(image.width - 1, Math.ceil(x1)); x++) {
        if (Math.abs(Math.hypot(x - centerX, y - centerY) - radius) <= band) {
          arcDelta = Math.max(arcDelta, distance(pixelAt(image, x, y), interior));
        }
      }
    }
    if (sharpDelta < minStrokeDelta && arcDelta >= minStrokeDelta) rounded++;
  }
  const requiredCorners = Number(rule.requiredCorners ?? 4);
  return rounded >= requiredCorners ? null
    : `only ${rounded}/${requiredCorners} corners have a clear tip and a visible rounded outline arc`;
}

function colorDominanceCheck(image: PNG, layout: any, rule: any): string | null {
  const match = rule?.match ?? {};
  const node = findLayoutNode(layout, String(match.id ?? ""), match.exact !== false);
  if (!node) return "semantic node is missing or not unique: " + String(match.id ?? "");
  const bounds = parseBounds(node?.attributes?.bounds ?? node?.bounds);
  if (!bounds) return "semantic node has invalid bounds: " + String(match.id ?? "");
  const width = bounds.right - bounds.left, height = bounds.bottom - bounds.top;
  if (width < 4 || height < 4) return "semantic node is too small for a color probe";

  const dominantChannel = String(rule.dominantChannel ?? "");
  if (!(["red", "green", "blue"] as string[]).includes(dominantChannel)) {
    return "dominantChannel must be red, green, or blue";
  }
  const channelKey: "r" | "g" | "b" = dominantChannel === "red" ? "r" :
    (dominantChannel === "green" ? "g" : "b");
  const sample = rule?.sample ?? {};
  const xRatio = Math.max(0, Math.min(1, Number(sample.xRatio ?? 0.5)));
  const yRatio = Math.max(0, Math.min(1, Number(sample.yRatio ?? 0.5)));
  const radius = Math.max(1, Math.min(width, height) * Number(sample.radiusRatio ?? 0.04));
  const centerX = bounds.left + width * xRatio, centerY = bounds.top + height * yRatio;
  const samples: Pixel[] = [];
  for (let y = Math.max(0, Math.floor(centerY - radius));
    y <= Math.min(image.height - 1, Math.ceil(centerY + radius)); y++) {
    for (let x = Math.max(0, Math.floor(centerX - radius));
      x <= Math.min(image.width - 1, Math.ceil(centerX + radius)); x++) {
      samples.push(pixelAt(image, x, y));
    }
  }
  if (samples.length === 0) return "color probe produced no samples";
  const color = medianPixel(samples);
  const dominant = color[channelKey];
  const competitors = channelKey === "r" ? [color.g, color.b] :
    (channelKey === "g" ? [color.r, color.b] : [color.r, color.g]);
  const minChannel = Number(rule.minChannel ?? 0);
  const minDominance = Number(rule.minDominance ?? 0);
  if (dominant < minChannel) {
    return `${dominantChannel} median ${dominant} is below required ${minChannel} (rgb ${color.r},${color.g},${color.b})`;
  }
  const dominance = dominant - Math.max(...competitors);
  return dominance >= minDominance ? null :
    `${dominantChannel} dominance ${dominance} is below required ${minDominance} (rgb ${color.r},${color.g},${color.b})`;
}

function inIgnoredRegion(x: number, y: number, regions: any[]): boolean {
  return regions.some((region) => x >= Number(region.x) && y >= Number(region.y) &&
    x < Number(region.x) + Number(region.width) && y < Number(region.y) + Number(region.height));
}

function baselineMismatch(actual: PNG, baseline: PNG, tolerance: any, ignored: any[]): number {
  if (actual.width !== baseline.width || actual.height !== baseline.height) return 1;
  const delta = Number(tolerance?.pixelDelta ?? 0);
  let compared = 0, mismatched = 0;
  for (let y = 0; y < actual.height; y++) {
    for (let x = 0; x < actual.width; x++) {
      if (inIgnoredRegion(x, y, ignored)) continue;
      compared++;
      const a = pixelAt(actual, x, y), b = pixelAt(baseline, x, y);
      if (Math.max(Math.abs(a.r - b.r), Math.abs(a.g - b.g), Math.abs(a.b - b.b), Math.abs(a.a - b.a)) > delta) {
        mismatched++;
      }
    }
  }
  return compared === 0 ? 0 : mismatched / compared;
}

export function compareVisualSpec(opts: {
  specPath: string;
  actualPath: string;
  layoutPath?: string;
  outputDir: string;
}): VisualCompareResult {
  const specPath = path.resolve(opts.specPath);
  const actualPath = path.resolve(opts.actualPath);
  const outputDir = path.resolve(opts.outputDir);
  const spec = readJson(specPath);
  if (spec?.schemaVersion !== 1) throw new Error("visual spec schemaVersion must be 1");
  const actual = PNG.sync.read(fs.readFileSync(actualPath));
  const issues: VisualIssue[] = [];
  let checks = 0;
  let mismatchRatio: number | undefined;

  if (spec.baselineImage) {
    checks++;
    const baselinePath = path.resolve(path.dirname(specPath), String(spec.baselineImage));
    const baseline = PNG.sync.read(fs.readFileSync(baselinePath));
    mismatchRatio = baselineMismatch(actual, baseline, spec.tolerance ?? {}, spec.ignoreRegions ?? []);
    const maxRatio = Number(spec?.tolerance?.maxMismatchRatio ?? 0);
    if (mismatchRatio > maxRatio) {
      issues.push({ id: "baseline", message: `mismatch ratio ${mismatchRatio} exceeds ${maxRatio}` });
    }
  }

  const roundedRules = Array.isArray(spec.roundedRectangles) ? spec.roundedRectangles : [];
  const roundedOutlineRules = Array.isArray(spec.roundedOutlines) ? spec.roundedOutlines : [];
  const colorProbeRules = Array.isArray(spec.colorProbes) ? spec.colorProbes : [];
  const containmentRules = Array.isArray(spec.layoutContainments) ? spec.layoutContainments : [];
  const separationRules = Array.isArray(spec.layoutSeparations) ? spec.layoutSeparations : [];
  const needsLayout = roundedRules.length > 0 || roundedOutlineRules.length > 0 ||
    colorProbeRules.length > 0 || containmentRules.length > 0 || separationRules.length > 0;
  if (needsLayout && !opts.layoutPath) {
    throw new Error("rendered shape, color, and layout checks require layoutPath");
  }
  const layout = needsLayout ? readJson(path.resolve(opts.layoutPath!)) : null;
  for (const rule of roundedRules) {
    checks++;
    const message = roundedRectangleCheck(actual, layout, rule);
    if (message) issues.push({ id: String(rule.id ?? "rounded-rectangle"), message });
  }
  for (const rule of roundedOutlineRules) {
    checks++;
    const message = roundedOutlineCheck(actual, layout, rule);
    if (message) issues.push({ id: String(rule.id ?? "rounded-outline"), message });
  }
  for (const rule of colorProbeRules) {
    checks++;
    const message = colorDominanceCheck(actual, layout, rule);
    if (message) issues.push({ id: String(rule.id ?? "color-probe"), message });
  }
  for (const rule of containmentRules) {
    checks++;
    const message = layoutContainmentCheck(layout, rule);
    if (message) issues.push({ id: String(rule.id ?? "layout-containment"), message });
  }
  for (const rule of separationRules) {
    checks++;
    const message = layoutSeparationCheck(layout, rule);
    if (message) issues.push({ id: String(rule.id ?? "layout-separation"), message });
  }
  if (checks === 0) throw new Error("visual spec contains no executable checks");

  fs.mkdirSync(outputDir, { recursive: true });
  const reportJson = path.join(outputDir, "visual-report.json");
  const reportMarkdown = path.join(outputDir, "visual-report.md");
  const result: VisualCompareResult = {
    status: issues.length === 0 ? "passed" : "failed",
    summary: { checks, passed: checks - issues.length, failed: issues.length, ...(mismatchRatio === undefined ? {} : { mismatchRatio }) },
    issues,
    reportJson,
    reportMarkdown,
  };
  fs.writeFileSync(reportJson, JSON.stringify(result, null, 2) + "\n", "utf8");
  const markdown = [
    "# Visual contract report",
    "",
    `- Status: ${result.status}`,
    `- Checks: ${checks}`,
    `- Failed: ${issues.length}`,
    ...(mismatchRatio === undefined ? [] : [`- Mismatch ratio: ${mismatchRatio}`]),
    "",
    ...(issues.length === 0 ? ["No issues."] : issues.map((issue) => `- ${issue.id}: ${issue.message}`)),
    "",
  ].join("\n");
  fs.writeFileSync(reportMarkdown, markdown, "utf8");
  return result;
}
