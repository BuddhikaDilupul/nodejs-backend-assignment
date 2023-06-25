const Author = require("../models/author.model");
const httpStatus = require("http-status");
const bookModel = require("../models/book.model");
const authorModel = require("../models/author.model");
const { mailService } = require("../services/mailer");

//controller for author registration
exports.create = async (req, res, next) => {

  try {
    const existsAuthor = await Author.find({
      email: req.body.email,
    });

    if (existsAuthor.length > 0) {
      return res.status(httpStatus.CONFLICT).json("This email already used");
    } else {
      const author = new Author({
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName
      });
      await author.save();

      return res.status(httpStatus.CREATED).json({ author });
    }

  } catch (error) {
    next(error);
  }
};


exports.likeCount = async (req, res, next) => {
  let authorData = []
  try {
    const allBooks = await bookModel.find({});
    const allAuthers = await authorModel.find({});
    if (allBooks) {

      for (let i = 0; i < allAuthers.length; i++) {
        let count = 0;
        for (const object of allBooks) {
          if (allAuthers[i]._id.toString() === object.author.toString()) {
            count += object.likes.length;
          }

          authorData[i] = {
            count: count, author: allAuthers[i],
          }
        }
      }
      mailService({
        type: 'likes',
        subject: 'Like count',
        email: config.sendEmailAddress,
        authorData: authorData,
      })
      return (authorData);
    }

  } catch (error) {
    next(error);
  }
};