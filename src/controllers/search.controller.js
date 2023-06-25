const Book = require("../models/book.model");
const httpStatus = require("http-status");

//controller for book search

exports.searchController = async (req, res, next) => {
  try {
    let filter = {}
    const name = req.body.searchData
    if (name !== undefined && name !== null) {
      filter.ISBN = {
        $regex: '.*' + name + '.*',
        $options: 'i',
      }
    }
    const books = await Book.find(filter)
    if (books.length > 0) {
      return res.status(httpStatus.OK).json({ books })
    } else {
      return res.status(httpStatus.NOT_FOUND).json("No data found")
    }
  } catch (error) {
    next(error)
  }
}


