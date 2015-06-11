var fs = require('fs');
var path = require('path');

module.exports = function (dirPath, cb) {
  var filteredFiles = [];
  var extension = 'mkv';

  fs.readdir(dirPath, function (err, list) {
      if (err) {
        return cb(err);
      }

      list.forEach(function (file) {
          if (path.extname(file) === '.' + extension) {
            filteredFiles.push({
              "sourceFile": path.join(dirPath, file),
              "path": dirPath,
              "destinationFile": path.join(dirPath,file.replace(".mkv", ".mp4"))
            });
        }
      });

    cb(filteredFiles);
  });
};