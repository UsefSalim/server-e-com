const Test = require('../models/test.model');

exports.testController = (req, res) => {
  res.status(200).json('test routing deployment add prettier eslint config ');
};
exports.getTests = async (req, res) => {
  try {
    const allTest = await Test.find();
    if (allTest) return res.status(200).json(allTest);
  } catch (error) {
    res.status(400).json(error);
  }
};
exports.addTests = async (req, res) => {
  const newTest = new Test({
    ...req.body,
  });
  try {
    const saveTest = await newTest.save();
    if (saveTest) return res.status(201).json(saveTest);
  } catch (error) {
    res.status(400).json(error);
  }
};
