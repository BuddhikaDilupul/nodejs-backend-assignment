const Book = require("../models/book.model");
const httpStatus = require("http-status");
const userModel = require("../models/user.model");

exports.create = async (req, res, next) => {
  try {
    const isExists = await Book.find({
      ISBN: req.body.ISBN,
    });
    if (isExists.length > 0) {
      return res.status(httpStatus.CONFLICT).json("already entered ISBN number");
    } else {
      const book = new Book({
        ISBN: req.body.ISBN,
        category: req.body.category,
        title: req.body.title,
        author: req.body.author
      });
      await book.save();
      return res.status(httpStatus.CREATED).json({ book });
    }
  } catch (error) {
    next(error);
  }
};

exports.like = async (req, res, next) => {
  try {
    const isExists = await Book.findById(req.params.id);
    if (isExists!==null) {
      if (isExists.likes.length > 0 && isExists.likes.includes(req.body.userId)) {
        return res.status(httpStatus.CONFLICT).json("already liked");
      } else {
        const liked = await Book.findByIdAndUpdate
          (req.params.id,
            {
              likes: isExists.likes.concat([req.body.userId]),
            },
            { new: true },
          )
        return res.status(httpStatus.CREATED).json({ liked });
      }
    } else {
      return res.status(httpStatus.BAD_REQUEST).json("No data")

    }
  } catch (error) {
    next(error);
  }
};




