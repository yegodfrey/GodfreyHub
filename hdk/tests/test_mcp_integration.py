import sys
import unittest
from pathlib import Path

from mcp import ClientSession, StdioServerParameters
from mcp.client.stdio import stdio_client


PROJECT_ROOT = Path(__file__).resolve().parents[1]


class MCPStdioIntegrationTests(unittest.IsolatedAsyncioTestCase):
    async def test_server_initializes_and_exposes_search_tools(self):
        params = StdioServerParameters(
            command=sys.executable,
            args=["mcp_server.py"],
            cwd=PROJECT_ROOT,
        )

        async with stdio_client(params) as (read, write):
            async with ClientSession(read, write) as session:
                await session.initialize()
                tools = await session.list_tools()
                names = {tool.name for tool in tools.tools}
                self.assertIn("search_documents", names)
                self.assertIn("get_document", names)

                result = await session.call_tool(
                    "search_documents", {"query": "ArkUI", "limit": 1}
                )
                self.assertFalse(result.is_error)
                self.assertTrue(result.content)


if __name__ == "__main__":
    unittest.main()
