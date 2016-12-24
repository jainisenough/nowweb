'use strict';

module.exports = function(server) {
  var router = server.loopback.Router();
  var domain = server.get('domain');
  router.get(new RegExp('(?!'+ '/api' +')'+ '[\w]*$'), function(req, res, next) {
    res.redirect('http' + (domain.port === 443 ? 's':'') + '://' + domain.host);
  });
  server.use(router);
};
