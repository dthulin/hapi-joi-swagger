const Hapi = require('@hapi/hapi');
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const HapiSwagger = require('hapi-swagger');
const Pack = require('./package');

(async () => {
  const server = await new Hapi.Server({
    host: 'localhost',
    port: 3000,
  });

  const swaggerOptions = {
    info: {
      title: 'Test API Documentation',
      version: Pack.version,
    },
  };

  await server.register([
    Inert,
    Vision,
    {
      plugin: HapiSwagger,
      options: swaggerOptions,
    },
  ]);

  server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return 'Hello World!';
    },
  });

  try {
    await server.start();
    console.log('Server running at:', server.info.uri);
  } catch (err) {
    console.log(err);
  }

  server.route(Routes);
})();
