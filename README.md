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

## Setup
Install the tools in the exact order to avoid the problems further down the line.

### Visual Studio Code
*   How to install:
    * Follow the instructions in the given URL.
*   Required Version: Latest
*   Installed Version: 1.52.1 
*   URL: https://code.visualstudio.com/download
*   Extensions:
    * Auto Close Tag
    * Auto Complete Tag
    * Auto Rename Tag
    * Babel ES6/ES7
*   Usage: Code Editor
*   Installation Dependency:
    * None

### Node.js
*   How to install:
    * Follow the instructions in the given URL.
*   Required Version: Latest
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
*   Required Version: Latest
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
*   Required Version: Latest
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
*   Required Version: Latest
*   Installed Version: 1.2.1
*   URL: https://yarnpkg.com/package/live-server or https://www.npmjs.com/package/live-server
*   Usage:
    * Simple development http server with live reload capability.
*   Installation Dependency:
    * live-server can be installed either by yarn or npm
    * [Node.js](#Node.js)
    * [npm](#npm)
    * [yarn](#yarn)



### Useful Commands

* #### Installation
```
    To install yarn globally
        ...\user>npm install -g yarn

    To install live-server globally using yarn
        ...\indecision-app>yarn global add live-server

    To install live-server globally using npm
        ...\indecision-app>npm install -g live-server
```

* #### Version
```
        ...\user>node -v (Node)
        ...\user>npm -v (npm)
        ...\user>yarn --version (yarn)
        ...\indecision-app>live-server -v (live-server)
```
* #### Functionality
```
    To activate live-server on public folder inside indecision-app folder
        ...\indecision-app>live-server public

```


