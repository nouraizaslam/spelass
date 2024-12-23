const Joi = require("joi");

module.exports = {
  gatewayV: Joi.object({
    endPoint: Joi.string().uri().invalid("").required(),
    method: Joi.string().valid('post', 'put', 'get', 'delete').required(),
    body: Joi.object().required(),
    headers: Joi.object().required()
  })
};
