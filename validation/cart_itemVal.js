const Joi = require("joi");

const validateCart_item = (cart_item) => {
  const schema = Joi.object({
    ticket_id: Joi.number().required(),
    cart_id: Joi.number().required(),
    quantity: Joi.number().required(),
  });

  return schema.validate(cart_item);
};

module.exports = { validateCart_item };
