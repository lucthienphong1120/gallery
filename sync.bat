@echo off
color 2
echo Check for lastest update from Repo
git pull
echo Start processing images to data
python setup.py
echo ---------------------------------------------------
git add -A
git commit -m "Automatic updated by sync.bat"
git push
git pull
echo Sync successfully! Thanks for using this script!
echo ---------------------------------------------------
pause