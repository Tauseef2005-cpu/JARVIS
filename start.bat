@echo off
title J.A.R.V.I.S. Launcher
echo ========================================================
echo        STARTING J.A.R.V.I.S. TERMINAL SYSTEM
echo ========================================================
echo.
cd /d "%~dp0server"
start http://localhost:3000
npm start
