@echo off
setlocal
chcp 65001 >nul
cd /d "%~dp0"

rem ============================================================
rem  OneClickPull - pull this repo's updates (two-PC workflow)
rem  Only pulls this repo. Never overwrites local changes.
rem  (conflicts are reported clearly, local content preserved)
rem ============================================================

echo === OneClickPull: pulling updates ... ===
echo.

if exist "%~dp0sync_projects.py" (
    py -3 "%~dp0sync_projects.py" pull
) else (
    echo [ERROR] sync_projects.py not found in this directory.
)

echo.
echo === Done. Press any key to close. ===
pause >nul
exit /b 0