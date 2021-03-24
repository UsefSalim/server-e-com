/// * -------------------------------------------------------------------------- categorie Controllers
// ------------- require mongoose ObjectId ----//
const ObjectID = require('mongoose').Types.ObjectId;

// -------------require models----------  //
const Categorie = require('../models/Categorie.models');

// -------------require validations----------  //
const {
  categorieValidations,
} = require('../validations/Categorie.validations');

/* ! @Route  : GET => api/categories
     Desc    : Get all categories
     @Access : Pubic
*/
exports.getAll = async (req, res) => {
  try {
    const all = await Categorie.find();
    if (all) return res.status(200).json(all);
  } catch (err) {
    return res.status(400).json({ getAllcategorieError: err });
  }
};

// /* ! @Route  : GET => api/categorie/:id
//      Desc    : Get One  categorie
//      @Access : Pubic
// */
// exports.getOne = async (req, res) => {
//   if (!ObjectID.isValid(req.params.id))
//     return res.status(404).json({
//       getOnecategorieError: `l'ID ${req.params.id} n'est pas valid`,
//     });
//   try {
//     const currentcategorie = await Categorie.findOne({ _id: req.params.id });
//     if (currentcategorie) return res.status(200).json(currentcategorie);
//     return res.status(404).json({
//       getOnecategorieError: `l'ID ${req.params.id} n'est pas disponible `,
//     });
//   } catch (error) {
//     return res.status(400).json(error);
//   }
// };

// /* ! @Route  : POST => api/categories/addcategorie
//      Desc    : Create categorie
//      @Access : Pubic
// */
// exports.addcategorie = async (req, res) => {
//   const { error } = categorieValidations(req.body);
//   if (error) return res.status(400).json(error.details[0].message);
//   const newcategorie = new Categorie({ ...req.body });
//   try {
//     if (await newcategorie.save()) return res.status(201).json(newcategorie);
//   } catch (err) {
//     return res.status(400).json(err);
//   }
// };
// /* ! @Route  : DELETE => api/categories/:id
//      Desc    : Delete categorie
//      @Access : Pubic
// */
// exports.deletcategorie = async (req, res) => {
//   if (!ObjectID.isValid(req.params.id))
//     return res
//       .status(400)
//       .json({ message: `l'ID ${req.params.id} n'est pas reconnu` });
//   try {
//     if (await Categorie.remove({ _id: req.params.id }).exec())
//       return res.status(200).json({
//         message: `categorie avec l'id ${req.params.id} est supprimer avec succées`,
//       });
//   } catch (err) {
//     return res.status(500).json({ err });
//   }
// };
// /* ! @Route  : DELETE => api/categorie/
//      Desc    : Delete All categories
//      @Access : Pubic
// */

// exports.deletAllcategories = async (req, res) => {
//   try {
//     if (await Categorie.deleteMany())
//       return res.status(200).json({
//         message: '0 element veiller rajouter un element a la todo liste',
//       });
//   } catch (err) {
//     return res.status(500).json({ err });
//   }
// };
// /* ! @Route  : UPDATE => api/categorie/:id
//      Desc    : Update categorie
//      @Access : Pubic
// */

// exports.updatecategorie = (req, res) => {
//   if (!ObjectID.isValid(req.params.id))
//     return res
//       .status(404)
//       .json({ message: `l'ID ${req.params.id} n'est pas reconnu` });
//   const { error } = categorieValidations(req.body);
//   if (error) return res.status(400).json(error.details[0].message);
//   try {
//     Categorie.findByIdAndUpdate(
//       { _id: req.params.id },
//       { $set: { ...req.body } },
//       { new: true, useFindAndModify: true, upsert: true },
//       (err, categorie) => {
//         !err ? res.status(200).json(categorie) : res.status(400).json({ err });
//       }
//     );
//   } catch (err) {
//     return res.status(400).json({ err });
//   }
// };
