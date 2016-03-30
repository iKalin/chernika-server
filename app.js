(function () {

  process.title = 'pinder';

  var config = require('./config.local');
  GLOBAL["config"] = config;

  var logger = require('./logger').create();
  GLOBAL['logger'] = logger;

  var model = require('./api/model');
  var api = require('./api/api');

  model.init();
  api.init();

})();