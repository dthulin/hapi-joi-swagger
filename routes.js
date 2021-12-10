const { helloWorldHandler } = require('./handlers/helloWorld');

const routes = (server) => {
  server.route({ method: 'GET', path: '/', handler: helloWorldHandler });
};

module.exports = {
  routes,
};
