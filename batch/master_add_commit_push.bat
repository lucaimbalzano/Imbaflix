@echo off
ECHO ############# AUTO COMMIT #############

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
git.exe push https://github.com/lucaimbalzano/Imbaflix.git

   setlocal enableextensions enabledelayedexpansion

    for /l %%a in (0 20 200) do (
        call :loadingScreen %%a
        >nul ping -n 1 "" 
    )
    echo(:: Done
    ECHO ############################################
    ECHO Successfully Commited
    ECHO %username% committed the message:  "%input%"
    goto :eof

:loadingScreen percent
    setlocal enableextensions enabledelayedexpansion

    rem Prepare everything 
    
    set "fill=^##################################^"
    set /a "chars=2+%~1/10"
    set "spaces=!fill:~%chars%!"
    set "loadBar=!fill:~0,%chars%!!spaces:#= !"
    set "loadBar2=!fill:~2,%chars%!!spaces:#= !"
    set "loadBar3=!fill:~3,%chars%!!spaces:#= !"
    set "loadBar4=!fill:~4,%chars%!!spaces:#= !"

    rem Time to paint
    (   cls
        echo(:: computer is computing .... %TIME%
        echo(::
        echo(::                          
        echo(::     Pushing your changes
        echo(::     %loadBar%
        echo(::     %loadBar2%
        echo(::     %loadBar3%
        echo(::     %loadBar4%
    ) 
    ECHO ::
    goto :eof

:exit
PAUSE