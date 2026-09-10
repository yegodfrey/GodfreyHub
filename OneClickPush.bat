@echo off
setlocal
chcp 65001 >nul
cd /d "%~dp0"

rem ============================================================
rem  OneClickPush - commit this repo's changes and push to remote
rem  Asks for a commit message in a popup (OneClickPush.ps1), then
rem  runs: sync_projects.py commit-file <msgfile>
rem  Only touches this repo. Cancel / empty message = no-op.
rem ============================================================

echo === OneClickPush: asking for commit message ... ===
echo.

set "MSGFILE=%TEMP%\OneClickPush_commit_msg.txt"
if exist "%MSGFILE%" del /q "%MSGFILE%"

powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0OneClickPush.ps1"
if errorlevel 1 (
    echo [INFO] Cancelled or empty message, no sync.
    echo.
    echo === Done. Press any key to close. ===
    pause >/dev/null
    exit /b 0
)

if exist "%~dp0sync_projects.py" (
    py -3 "%~dp0sync_projects.py" commit-file "%MSGFILE%"
) else (
    echo [ERROR] sync_projects.py not found in this directory.
)

if exist "%MSGFILE%" del /q "%MSGFILE%"

echo.
echo === Done. Press any key to close. ===
pause >/dev/null
exit /b 0
