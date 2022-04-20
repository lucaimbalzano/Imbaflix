@echo off
    setlocal enableextensions enabledelayedexpansion

    for /l %%a in (0 10 100) do (
        call :loadingScreen %%a
        >nul ping -n 2 "" 
    )
    echo(:: Done
    goto :eof

:loadingScreen percent
    setlocal enableextensions enabledelayedexpansion

    rem Prepare everything 
    set    "sb=+----------+"
    set "fill=^|##########^|"
    set    "eb=+----------+"
    set /a "chars=2+%~1/10"
    set "spaces=!fill:~%chars%!"
    set "loadBar=!fill:~0,%chars%!!spaces:#= !"

    rem Time to paint
    (   cls
        echo(:: computers were created to give humans time to think while waiting .... %time%
        echo(
        echo(                           %sb%
        echo(     Loading something big %loadBar%
        echo(                           %eb%
        echo(
    ) 
    goto :eof