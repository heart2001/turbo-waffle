# Web Lab Practicals Guide
[Install Node.js](#install-nodejs)
[Practicals List](#practicals)

## Ubuntu Instructions
- The quickest way to open a terminal is to press the windows key and type `terminal`.
- If you wish to open terminal in a particular folder, open that folder in Files app and right click > `Open terminal here`.
- You will need to install Node.js first.

## Install Node.js
Execute these commands one by one to install Node.js on Ubuntu:
- `sudo apt-get install build-essential`
- `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash`
- `export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"`
- `[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm`
- `nvm install v18`

You cannot use VSCode. You can use in-terminal editor like Nano or a graphical editor like `gedit`:
- For gedit (easier to use, but may not be installed), use `gedit <filename>`, for example `gedit index.html` or `gedit index.ts`.
- For nano (harder to use, but is always installed0, use `nano <filename>`. You will get some keyboard shortcuts at the bottom of the screen. `^X` stands for `Ctrl` + `X` (to exit). `M-U` stands for `Alt` + `U` (for undo).

## Practicals
- 03: WAP for calculator using Typescript.
- 04: WAP for inheritance using Typescript.
- 05: WAP for access modifiers using Typescript.
- 06: Resume website using Typescript.
- 07: Angular (`ng-controller`, `ng-model`, expressions)
- 08: Angular (events and validations)
- 11: AJAX user validation
- 12: AJAX submit form using Javascript
- 13: Design feedback form using flask
- 14: Design weather app using flask
