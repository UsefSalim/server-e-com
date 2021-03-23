const express = require('express');

const router = express.Router();
const {
  testController,
  getTests,
  addTests,
} = require('../controllers/test.controller');

router.get('/', testController);
router.get('/tests', getTests);
router.post('/add', addTests);

module.exports = router;
