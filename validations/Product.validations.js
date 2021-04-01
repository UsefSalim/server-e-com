const Joi = require('joi');

exports.productValidations = (data) => {
  const schema = Joi.object({
    name: Joi.string().required().min(6).max(50),
    prix: Joi.string().trim().required(),
    image: Joi.string().required(),
    categorie: Joi.string(),
  });

  return schema.validate(data);
};
