const Joi = require('joi');

exports.categorieValidations = (data) =>
{
  const schema = Joi.object({
    name: Joi.string().required().min(6).max(50),
    soucategories: Joi.string(),
    products: Joi.string(),
  });

  return schema.validate(data);
};
