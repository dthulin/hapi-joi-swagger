const { helloWorldHandler } = require('./handlers/helloWorld');

const helloWorldHandler = require('./handlers/helloWorld').helloWorldHandler;

const routes = (server) => {
  server.route({ method: 'GET', path: '/', handler: helloWorldHandler });
};

module.exports = {
  routes,
};
