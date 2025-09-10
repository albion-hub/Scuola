@echo off
echo Creazione eseguibile in corso...

REM percorso di pyinstaller

set PYINSTALLER="C:\Users\albio\AppData\Roaming\Python\Python313\Scripts\pyinstaller.exe"

%PYINSTALLER% ^
--name InterfacciaRouter ^
--add-data "GUI;GUI" ^
--onefile ^
--icon="./router.ico" ^
--noconsole ^
main.py

echo Operazione completata.
pause
