var child_process = require('child_process');
var argv = require('yargs').argv;
var fs = require('fs');
var path = require('path');
var dammit = require('dammit');
var chalk = require('chalk');
var filteredFiles = require('./filteredFiles.js');

if (!argv.source) {
  goodbye('I need you to at least specify the --source');
}

var source = argv.source;

if (!fs.existsSync(source)) {
  goodbye(source + ' does not exist');
}

filteredFiles(source, convert);

function convert(files) {

for(var i=0;i<files.length;i++){
  console.log('ffmpeg -i ' + files[i].sourceFile + ' -c:v copy -c:a libfaac -ac 6 -ar 48000 -ab 448k ' + files[i].destinationFile);
}
//  child_process.exec('ffmpeg -i ' + files[0].sourceFile + ' -c:v copy -c:a libfaac -ac 6 -ar 48000 -ab 448k ' + files[0].destinationFile,
     //    function (err, stdout, stderr) {
     //      if (err) throw err;
     //
     //    });
}

function goodbye(reason) {
  console.log(chalk.red(dammit({
    'NSFW': true
  })));
  console.log(chalk.red(reason));
  process.exit();
}


// ffmpeg -i HomeMovie.mkv -c:v copy -c:a libfaac -ac 6 -ar 48000 -ab 448k HomeMovie.mp4