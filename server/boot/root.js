'use strict';

module.exports = function(server) {
  var router = server.loopback.Router();
  var domain = server.get('domain');
  var regex = '\/';
  regex += '(?!' + server.get('restApiRoot').substring(1) + ')';
  if(server.get('loopback-component-explorer') && server.get('loopback-component-explorer').mountPath)
    regex += '(?!' + server.get('loopback-component-explorer').mountPath.substring(1) + ')';
  regex += '[\w]*$';
  router.get(new RegExp(regex), function(req, res, next) {
    res.redirect('http' + (domain.port === 443 ? 's':'') + '://' + domain.host);
  });
  server.use(router);
};
