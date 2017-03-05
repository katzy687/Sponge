var configValues = require('./config');

module.exports = {

  getDbConnectionString: function(){
    return 'mongodb://' + configValues.uname + ':' + configValues.pwd + '@ds163677.mlab.com:63677/sponge';
  }
};
