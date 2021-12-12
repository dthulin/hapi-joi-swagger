const Joi = require('joi');
const { helloWorldHandler } = require('./app/handlers/helloWorldHandler');

const Routes = [
  {
    method: 'POST',
    path: '/items',
    options: {
      handler: (request, h) => {
        return h
          .response('OK')
          .header('cache-control', 'no-cache')
          .type('text/javascript');
      },
      tags: ['api'],
      validate: {
        payload: Joi.object({
          a: Joi.number(),
          b: Joi.number(),
        }),
      },
    },
  },
  { method: 'GET', path: '/hello', options: helloWorldHandler },
];
module.exports = { Routes };
