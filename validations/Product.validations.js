const Joi = require('joi');

exports.productValidations = (data) =>
{
  const schema = Joi.object({
    name: Joi.string().required().min(6).max(50),
    prix: Joi.number().trim().required(),
    image: Joi.string().trim().required(),
    categorie: Joi.string().trim().required,
  });

  return schema.validate(data);
};
