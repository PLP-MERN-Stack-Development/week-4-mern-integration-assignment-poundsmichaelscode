// routes/categories.js
const express = require('express');
const router = express.Router();
const Category = require('../models/Category');

router.get('/', async (req, res, next) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { name } = req.body;
    const newCat = new Category({ name });
    const saved = await newCat.save();
    res.status(201).json(saved);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
