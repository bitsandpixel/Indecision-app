# Indecison-app
## Table of contents
* [General info](#general-info)
* [Development Environment](#development-environment)
* [Setup](#setup)
    * [Useful Commands](#useful-commands)
        * [Installation](#installation)
        * [Version](#version)
        * [Functionality](#functionality)

## General info
*   An Indecision app developed based on the ReactJs tutorial on Udemy.
*   URL: https://www.udemy.com/course/react-2nd-edition/
	
## Development Environment
Project is created with:
* [Visual Studio Code](#visual-studio-code) 
* [Node.js](#Node.js)
* [npm](#npm)
* [yarn](#yarn)
* [live-server](#live-server)
* [Babel](#babel)

## Setup
Install the tools in the exact order to avoid the problems further down the line.

### Visual Studio Code
*   How to install:
    * Follow the instructions in the given URL.
*   Installed Version: 1.52.1 
*   URL: https://code.visualstudio.com/download
*   Extensions:
    * Babel ES6/ES7
    * Path Intellisense
    * Auto Close Tag
    * Auto Complete Tag
    * Auto Rename Tag
*   Usage: Code Editor
*   Installation Dependency:
    * None

### Node.js
*   How to install:
    * Follow the instructions in the given URL.
*   Installed Version: 13.8.0
*   URL: https://nodejs.org/en/
*   Usage: 
    * to create a production web server
    * to use webpack tool.
*   Installation Dependency:
    * None

### npm
*   How to install:
    * Node Package Manager will be installed along with [Node.js](#Node.js)
*   Installed Version: 6.13.6
*   URL: https://nodejs.org/en/
*   Usage: 
    * to install yarn package manager
    * to install React.
    * other libraries in the React ecosystem 
*   Installation Dependency: 
    * None

### yarn
*   How to install:
    * go to  [Installation](#installation) section for the command or 
    * Follow the instructions in the given URL. 
*   Installed Version: 1.22.0
*   URL: https://yarnpkg.com/getting-started/install
*   Usage: 
    * to install live-server tool
    * other libraries in the React ecosystem 
*   Installation Dependency:
    * [Node.js](#Node.js)
    * [npm](#npm)
    * Restart Windows for yarn to completely configure itself.

### live-server
*   How to install:
    * go to  [Installation](#installation) section for the command or 
    * Follow the instructions in the given URL. 
*   Installed Version: 1.2.1
*   URL: https://yarnpkg.com/package/live-server or https://www.npmjs.com/package/live-server
*   Usage:
    * Simple development http server with live reload capability.
*   Installation Dependency:
    * live-server can be installed either by yarn or npm
    * [Node.js](#Node.js)
    * [npm](#npm)
    * [yarn](#yarn)

### Babel
*   How to install:
    * go to  [Installation](#installation) section for the command or 
    * Follow the instructions in the given URL. 
*   Installed Version: 6.24.1
*   URL: https://babeljs.io/
*   Usage:
    * to compile javascript and JSX.
    * supports backward compatability by compiling down the features from ES6 and ES7 to ES5 code.
*   Installation Dependency:
    * live-server can be installed either by yarn or npm
    * [Node.js](#Node.js)
    * [npm](#npm)
    * [yarn](#yarn)



### Useful Commands

* #### Installation
```
    To install yarn globally
        npm install -g yarn

    To install live-server globally using yarn
        yarn global add live-server

    To install live-server globally using npm
        npm install -g live-server

    To install Babel globally using yarn
        yarn global add babel-cli@6.24.1

    To install Babel globally using npm
        npm install -g babel-cli@6.24.1
    
    To install to Babel presets(dependencies) using yarn
        yarn add babel-preset-react@6.24.1 babel-preset-env@1.5.2
    
    To install all dependencies mentioned in package.json using yarn
        yarn install
```
* #### Functionality
```
    To activate live-server on public folder inside indecision-app folder
        live-server public

    To view the commands you can run with babel
        babel --help
    
    To access the list of commands of yarn
        yarn help
    
    To get the information of specific command of yarn
        yarn help COMMAND
    
    To start a new project and to interactively create or update a package.json file
        yarn init

    To compile an input file to an output file using babel 
        babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
```
* #### Version
```
        node -v (Node)
        npm -v (npm)
        yarn --version (yarn)
        live-server -v (live-server)
        babel --version (babel)
```


