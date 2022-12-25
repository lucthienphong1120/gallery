@echo off
color 2
git pull
python setup.py
echo ---------------------------------------------------
git add -A
git commit -m "Automatic update by sync.bat"
git push
git pull
echo Sync successful! Thank you for using
echo ---------------------------------------------------
pause