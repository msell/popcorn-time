var FfmpegCommand = require('fluent-ffmpeg');
var argv = require('yargs').argv;
var cmd = new FfmpegCommand();
var fs = require('fs');
var path = require('path');
var dammit = require('dammit');

    
if(!argv.source){
    goodbye('I need you to at least specify the --source');
}


if(fs.existsSync(argv.source)){
    
}

function goodbye(reason){
    console.log(dammit({'NSFW': true})); 
    console.log(reason);
    process.exit();
}
//module.exports = function (dirPath, extension, cb) {
//  var filteredFiles = [];  
//
//  fs.readdir(dirPath, function (err, list) {
//    if (err) {
//      return cb(err);
//    }
//
//    list.forEach(function (file) {
//      if (path.extname(file) === '.' + extension) {
//        filteredFiles.push(file);
//      }
//    });
//
//    cb(null, filteredFiles);
//  });
//};