var core = require('./core')

var mkdir = core.mkdir;
var copyTemplate = core.copyTemplate;

// 创建server文件夹
function createServer() {
  mkdir('./Supos-Cli/server', function () {
    mkdir('./Supos-Cli/server/bin', function () {
      copyTemplate('server/bin/main.js', './Supos-Cli/server/bin/main.js');
    });
    mkdir('./Supos-Cli/server/routes', function () {
      copyTemplate('server/routes/index.js', './Supos-Cli/server/routes/index.js');
    });
    copyTemplate('server/app.js', './Supos-Cli/server/app.js');
  });
}

// 创建source文件
function createSource() {
  mkdir('./Supos-Cli/src', function () {
    copyTemplate('src/index.js', './Supos-Cli/src/index.js');
    copyTemplate('src/index.html', './Supos-Cli/src/index.html');
  });
}

//创建webpack配置文件夹
function createWebpackConfig() {
  mkdir('./Supos-Cli/webpack.config', function () {
    copyTemplate('webpack.config/webpack.config.js', './Supos-Cli/webpack.config/webpack.config.js');
  });
}

// 初始化项目
function initProject() {
  try {
    mkdir('./Supos-Cli', function () {
      createServer();
      createSource();
      createWebpackConfig();
      copyTemplate('.babelrc', './Supos-Cli/.babelrc');
      copyTemplate('package.json', './Supos-Cli/package.json');
    });
  } catch (e) {
    console.error(e);
  }
}

exports.default = {
  initialize: initProject
}