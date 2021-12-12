const Joi = require('joi');

const handler = (request, h) => {
  // return 'Hello, World!';
  const response = h({ response: 'Hello, World!' })
    .header('cache-control', 'no-cache')
    .type('application/json');
  return response;

  // let ret = '';
  // ret = JSON.stringify(res);
  // if (request == null || h == null){
  //         return ret;
  // }else{
  //         const response = h.response(ret)
  //                 .header('cache-control', 'no-cache')
  //                 .type('application/json')
  //         return response;
  // }
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
