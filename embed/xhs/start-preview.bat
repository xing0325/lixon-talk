@echo off
title xiaohongshu preview  --  keep this window open
echo.
echo   小红书预览服务器   http://localhost:8060
echo   保持这个窗口开着 = 预览一直在；关掉窗口 = 停止。
echo.
start "" http://localhost:8060
python -m http.server 8060 --bind 127.0.0.1 --directory "C:\Users\david\xiaohongshu-preview"
