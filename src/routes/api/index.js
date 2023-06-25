const express = require('express')
const router = express.Router()

const author = require('./author.route')
const auth = require('./auth.route')
const book = require('./book.route')
const search = require('./search.route')
const category = require('./category.route')
router.use('/author', author)
router.use('/auth', auth)
router.use('/book',  book)
router.use('/category',  category)
router.use('/search',  search)

module.exports = router
