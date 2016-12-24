'use strict';

module.exports = function(server) {
  var router = server.loopback.Router();
  var domain = server.get('domain');
  routes.push(server.get('restApiRoot') + '/*');
  if(server.get('loopback-component-explorer'))
    routes.push(server.get('loopback-component-explorer').mountPath + '*');
  router.get(new RegExp('(?!'+ server.get('restApiRoot') +')'+ (server.get('loopback-component-explorer') ? '(?!' + server.get('loopback-component-explorer').mountPath + ')':'') +'[\w]*$'), function(req, res, next) {
    console.log('here');
    next();
  }).get('*', function(req, res) {
    console.log('here2');
    res.redirect('http' + (domain.port === 443 ? 's':'') + '://' + domain.host);
  });
  server.use(router);
};
