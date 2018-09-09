# Web Animations
This is a repository where I save web animations that I've been working.
Each folder is an independent animation.


## Pre-requisites

* Install NODE.js version 10.10 or higher
* Install 


## How to start
Once you have downloaded the package, postion yourself on the directory you want to execute and run the following commands.
1. npm install
2. npm start

With start command, chrome browser will be opened with the web animation.

## Troubleshooting
1. In case you have an error with GULP while runing npm start try rebuilding the npm sass package and then try again the start command:

    ``` 
    npm rebuild node-sass
    
2. In case no browser was opened:
    * Check where you have installed the browser that you want to get open.
    * Copy the browser's path.
    * Paste at gulpfile.js in the directory, look for the word "browser" and change with the copied path.
    * run start again.

## Contact
> @edanca512