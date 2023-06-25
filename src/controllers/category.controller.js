const Book = require("../models/book.model");
const httpStatus = require("http-status");
const Category = require("../models/category.model");


exports.category = async (req, res, next) => {
  try {
    const isExists = await Category.find({
      categoryName: req.body.categoryName,
    });

    if (isExists.length > 0) {
      return res.status(httpStatus.CONFLICT).json("already entered");
    } else {
      const category = new Category({
        categoryName: req.body.categoryName,
      });
      await category.save();
      return res.status(httpStatus.CREATED).json({ category });
    }
  } catch (error) {
    next(error);
  }
};


