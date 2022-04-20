@echo off
ECHO AUTO COMMIT

:inputCommand
ECHO Enter commit message or X to exit..
SET /p input=""
GOTO check
  

:check
IF "%input%" == "" (
	ECHO Input is empty
	GOTO inputCommand 
) ELSE (
   IF "%input%" == "X" (
       exit
   ) ELSE (
     GOTO commit
   )
)

:commit
git.exe add .
git.exe commit -m "%input%"
git.exe push
ECHO Successfully Commited
ECHO $USERNAME committed "%input%"

:exit
PAUSE