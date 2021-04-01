/// * -------------------------------------------------------------------------- product Controllers
// ------------- require mongoose ObjectId ----//
const ObjectID = require('mongoose').Types.ObjectId;
// -------------require models----------  //
const product = require('../models/Product.models');

// -------------require validations----------  //
const { productValidations } = require('../validations/Product.validations');

/* ! @Route  : GET => api/products
     Desc    : Get all products
     @Access : Pubic
*/
exports.getAll = async (req, res) =>
{
  try
  {
    const all = await product.find();
    if (all) return res.status(200).json(all);
  } catch (err)
  {
    return res.status(400).json({ getAllproductError: err });
  }
};

/* ! @Route  : GET => api/product/:id
     Desc    : Get One  product
     @Access : Pubic
*/
exports.getOne = async (req, res) =>
{
  if (!ObjectID.isValid(req.params.id))
    return res.status(404).json({
      getOneproductError: `l'ID ${req.params.id} n'est pas valid`,
    });
  try
  {
    const currentproduct = await product.findOne({ _id: req.params.id });
    if (currentproduct) return res.status(200).json(currentproduct);
    return res.status(404).json({
      getOneproductError: `l'ID ${req.params.id} n'est pas disponible `,
    });
  } catch (error)
  {
    return res.status(400).json(error);
  }
};

/* ! @Route  : POST => api/products/addproduct
     Desc    : Create product
     @Access : Pubic
*/


exports.addproduct = async (req, res) =>
{
  const { error } = productValidations(req.body);
  if (error) return res.status(400).json(error.details[0].message);
  const newproduct = new product({ ...req.body });
  try
  {
    if (await newproduct.save()) return res.status(201).json(newproduct);
  } catch (err)
  {
    return res.status(400).json(err);
  }
};
/* ! @Route  : DELETE => api/products/:id
     Desc    : Delete product
     @Access : Pubic
*/
exports.deletproduct = async (req, res) =>
{
  if (!ObjectID.isValid(req.params.id))
    return res
      .status(400)
      .json({ message: `l'ID ${req.params.id} n'est pas reconnu` });
  try
  {
    if (await product.remove({ _id: req.params.id }).exec())
      return res.status(200).json({
        message: `product avec l'id ${req.params.id} est supprimer avec succées`,
      });
  } catch (err)
  {
    return res.status(500).json({ err });
  }
};
/* ! @Route  : DELETE => api/product/
     Desc    : Delete All products
     @Access : Pubic
*/

exports.deletAllproducts = async (req, res) =>
{
  try
  {
    if (await product.deleteMany())
      return res.status(200).json({
        message: '0 element veiller rajouter un element a la todo liste',
      });
  } catch (err)
  {
    return res.status(500).json({ err });
  }
};
/* ! @Route  : UPDATE => api/product/:id
     Desc    : Update product
     @Access : Pubic
*/

exports.updateproduct = (req, res) =>
{
  if (!ObjectID.isValid(req.params.id))
    return res
      .status(404)
      .json({ message: `l'ID ${req.params.id} n'est pas reconnu` });
  const { error } = productValidations(req.body);
  if (error) return res.status(400).json(error.details[0].message);
  try
  {
    product.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } },
      { new: true, useFindAndModify: true, upsert: true },
      (err, product) =>
      {
        !err ? res.status(200).json(product) : res.status(400).json({ err });
      }
    );
  } catch (err)
  {
    return res.status(400).json({ err });
  }
};
