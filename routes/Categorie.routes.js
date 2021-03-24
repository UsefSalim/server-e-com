const express = require('express');

const router = express.Router();

const {
  getAll,
  addcategorie,
  deletcategorie,
  deletAllcategories,
  getOne,
  updatecategorie,
} = require('../controllers/categorie.controllers');

/// * ------------------------- categorie Route

/* ! @Route  : GET => /
     Desc    : Get all categories 
     @Access : Pubic
*/
router.get('/', getAll);

/* ! @Route  : GET => /:id
     Desc    : Get One  categorie
     @Access : Pubic
*/
router.get('/:id', getOne);

/* ! @Route  : POST => /add
     Desc    : Create categorie
     @Access : Pubic
*/

router.post('/add', addcategorie);

/* ! @Route  : POST => /:id
     Desc    : Delete One categorie
     @Access : Pubic
*/
router.delete('/:id', deletcategorie);

/* ! @Route  : DELETE => /
     Desc    : Delete All categories
     @Access : Pubic
*/
router.delete('/', deletAllcategories);

/* ! @Route  : UPDATE => /:id
     Desc    : UPDATE  categorie
     @Access : Pubic
*/
router.put('/:id', updatecategorie);

module.exports = router;
