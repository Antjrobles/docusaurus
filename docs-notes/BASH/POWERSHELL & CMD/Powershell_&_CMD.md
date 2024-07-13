> # POWESHELL & CMD
---

## CREAR ALIAS
```powershell
#Comprobar si hay perfil. Tiene que dar true
Test-Path $PROFILE

# Si el resultado es False, necesitas crear el archivo de perfil
New-Item -Path $PROFILE -ItemType File -Force

# Crear los alias cuando ya exoste perfil
notepad $PROFILE

# En el archivo de perfil, agrega la línea de comando que crea el alias
Set-Alias c cls  # c limpia la terminal

# Recargar la conf sin salir de la terminal
. $PROFILE
```
