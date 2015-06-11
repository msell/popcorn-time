


var FfmpegCommand = require('fluent-ffmpeg');
var argv = require('yargs').argv;
var cmd = new FfmpegCommand();
var fs = require('fs');
var path = require('path');
var dammit = require('dammit');
var chalk = require('chalk');
var filteredFiles = require('./filteredFiles.js');
  
if(!argv.source){
    goodbye('I need you to at least specify the --source');
}

var source = argv.source;

if(!fs.existsSync(source)){
    goodbye(source + ' does not exist');
}

filteredFiles(source, console.log);

function goodbye(reason){
    console.log(chalk.red(dammit({'NSFW': true}))); 
    console.log(chalk.red(reason));
    process.exit();
}


// ffmpeg -i HomeMovie.mkv -c:v copy -c:a libfaac -ac 6 -ar 48000 -ab 448k HomeMovie.mp4

