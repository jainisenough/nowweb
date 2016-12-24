'use strict';

module.exports = function(server) {
  var router = server.loopback.Router();
  var routes = [];
  var domain = server.get('domain');
  routes.push(server.get('restApiRoot') + '/*');
  if(server.get('loopback-component-explorer'))
    routes.push(server.get('loopback-component-explorer').mountPath + '*');
  router.get(routes, function(req, res, next) {
    next();
  }).get('*', function(req, res) {
    res.redirect('http' + (domain.port === 443 ? 's':'') + '://' + domain.host);
  });
  server.use(router);
};
