@echo off
git init
git add .
git commit -m "Final Polish - Premium KD Hospital Website"
git remote remove origin
git remote add origin "https://github.com/akashnair14/kdhospital.git"
git branch -M main
git push -u origin main -f
echo DONE
