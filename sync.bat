@echo off
color 2
git pull
python setup.py
git add -A
git commit -m "Automatic update by sync.bat"
git push
git pull
pause