@echo off
title Adebusola Tomiwa - AI Portfolio
echo ============================================================
echo    ADEBUSOLA TOMIWA - AI SYSTEMS ENGINEERING PORTFOLIO
echo ============================================================
echo.
echo Starting local production preview server...
cd /d "%~dp0"
start http://localhost:4173
npx vite preview --port 4173 --host
