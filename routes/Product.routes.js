const express = require('express');

const router = express.Router();

const {
     getAll,
     addproduct,
     deletproduct,
     deletAllproducts,
     getOne,
     updateproduct,
} = require('../controllers/Product.controllers');

/// * ------------------------- product Route

/* ! @Route  : GET => /
     Desc    : Get all products 
     @Access : Pubic
*/
router.get('/', getAll);

/* ! @Route  : GET => /:id
     Desc    : Get One  product
     @Access : Pubic
*/
router.get('/:id', getOne);

/* ! @Route  : POST => /add
     Desc    : Create product
     @Access : Pubic
*/

router.post('/add', addproduct);

/* ! @Route  : POST => /:id
     Desc    : Delete One product
     @Access : Pubic
*/
router.delete('/:id', deletproduct);

/* ! @Route  : DELETE => /
     Desc    : Delete All products
     @Access : Pubic
*/
router.delete('/', deletAllproducts);

/* ! @Route  : UPDATE => /:id
     Desc    : UPDATE  product
     @Access : Pubic
*/
router.put('/:id', updateproduct);

module.exports = router;
