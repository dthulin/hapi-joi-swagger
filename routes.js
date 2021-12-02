const routes = (server) => 
{
  server.route(
    {method: 'GET', path: '/',
    handler: (request, h) => {
      return 'Hello World!';
    },
  });
}
module.exports = {
  routes
};