
> # BASH
---

## CREATE A SCRIPT
- Iniciar con el shebang, es decir, indicar con qué programa o shell va a funcionar:
    -`#!/bin/bash`
    - `#!/usr/bin/python3`
- Poner nombre al archivo y extensión sh
- Darle permisos de ejecución con
```bash
sudo chmod +x [archiveName.sh]
```


## COMMANDS
- `sleep 5` - Pause the script 5 seconds
- `echo "Some text here"` - Print something on the screen. Must be in 'double quotes' for the echo command can read if there is any variable declared:
```BASH
#!/bin/bash
myname=Antonio

echo "My name is $myname"
```

## VARIABLES
- To declare a variable -  `nameOfTheVariable="variable"`. As a convention, all the variable created by you, goes in  lowercase, since the are builtin variables in uppercase included in the system by default:  `USER`, `PATH`... To check all the builtin varibles declared by the system - `env`

```BASH
word="awesome"
myName="Antonio"
myAge="40"
```
- To call a variable add `$` in front of the variable.
```BASH
word="awesome"

echo "Linux is $word"
echo "sunny days are $word"
echo "$word is an $word word"
```

- Subshell - Assign to a variable the output of a command (without the 'double quotes')
```BASH
#!/bin/bash

listFiles=$(ls)

echo "This are the files in my directory: $(ls)"

# example with date
now=$(date)

echo "The system time and date is:"
echo $now  # whithout the parenthesis.
```




