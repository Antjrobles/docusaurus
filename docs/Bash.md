---
sidebar_position: 5
title: "BASH"
description: Some Commands and tips for Bash
created: 16-06-2002
tag:
- Programming
- Linux
- Bash
---
# BASH

## LINKS TO COURSES AND TUTORIALS
- [Starship](https://starship.rs/)
- [Oh My Zsh](https://ohmyz.sh/)

## <mark>INSTALL AND CONFIG STARSHIP</mark>
- `curl -sS https://starship.rs/install.sh | sh` - This is for Linux (Check others systems in the Url). 
- `eval "$(starship init zsh)"` - Add the following to the end of `~/.zshrc`
- To [`pastel powerline`](https://starship.rs/es-es/presets/pastel-powerline.html): 
    - `mkdir -p ~/.config && touch ~/.config/starship.toml`
    - `starship preset pastel-powerline > ~/.config/starship.toml
`

## <mark>INSTALL AND CONFIG ZSH</mark>
- `sudo apt-get update`
- `sudo apt-get install zsh`
- `zsh`
- `touch ~/.zshrc`
#### INSTALL OH-MY-ZSH
```bash
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```
- `nvim .zshrc`  - mdify to add themes and plugins
- exit zsh and enter again (for plugins and themes to take effect)
#### INSTALL PLUGIN (autosuggestions)
- `cd ~/.oh-my-zsh/custom/plugins`
- `git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions`
- add  `zsh-autosuggestions`  to `~/.zshrc` inside `plugins=()`


## <mark>CREATE A SCRIPT</mark>
- Iniciar con el `shebang`, es decir, indicar con qué programa o shell va a funcionar:
  - `#!/bin/bash`
  - `#!/usr/bin/python3`
- Poner nombre al archivo y extensión `sh`
- Darle permisos de ejecución con

```
sudo chmod +x [archiveName.sh]
```

---

## <mark>COMMANDS</mark>

- `sleep 5` - Pause the script 5 seconds
- `echo "Some text here"` - Print something on the screen
