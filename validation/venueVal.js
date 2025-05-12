const Joi = require("joi");

const validateVenue = (venue) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    address: Joi.string().required(),
    location: Joi.string().required(),
    site: Joi.string().required(),
    phone: Joi.string().required(),
    schema: Joi.number().required(),
    region_id: Joi.number().required(),
    district_id: Joi.number().required(),
  });

  return schema.validate(venue);
};

module.exports = { validateVenue };
