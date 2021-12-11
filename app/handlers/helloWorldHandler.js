const Joi = require('joi');

const handler = (request, h) => {
  return 'Hello, World!';
};

const helloWorldHandler = {
  handler,
  description: 'Basic "Hello, World!" greeting.',
  tags: ['api'],
  validate: {
    query: Joi.object({
      search: Joi.string(),
    }),
  },
};

module.exports = { helloWorldHandler };
