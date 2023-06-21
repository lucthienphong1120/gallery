@echo off
color 2
git pull
python setup.py
echo ---------------------------------------------------
git add -A
git commit -m "Automatic update by sync.bat"
git push
git pull
echo Sync successfully! Thanks for using this script!
echo ---------------------------------------------------
pause