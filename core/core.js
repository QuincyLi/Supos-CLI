var fs = require('fs');
var path = require('path');

function copyTemplate(from, to) {
  var fromPath = path.join(__dirname, '..', 'templates', from);
  write(to, fs.readFileSync(fromPath, 'utf-8'));
}

function write(path, str, mode) {
  fs.writeFileSync(path, str);
}

function mkdir(path, fn) {
  fs.mkdir(path, function (err) {
    fn && fn()
  });
}

module.exports = {
  copyTemplate: copyTemplate,
  write: write,
  mkdir: mkdir
};