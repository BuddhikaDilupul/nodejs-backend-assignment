const httpStatus = require('http-status')
const { mailService } = require('../services/mailer')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const userModel = require('../models/user.model')

exports.create = async (req, res, next) => {
  try {
    const user = await userModel.findOne({
      email: req.body.email,
    })
    if (user) {
      return res.status(httpStatus.CONFLICT).send('userName  Already exists!!')
    }
    const newUser = new userModel({
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: bcrypt.hashSync(req.body.password, 10),
    })
    await newUser.save()
    return res.status(httpStatus.CREATED).json({ newUser, success: true })

  } catch (error) {
    next(error)
  }
}
  exports.login = async (req, res, next) => {
    try {
      const user = await userModel.findOne({ email: req.body.email })
      
      const secret = process.env.secret
      if (!user) {
        return res.status(httpStatus.NOT_FOUND).send('customer not found!!')
      }
      if (user && bcrypt.compareSync(req.body.password, user.password)) {
        const token = jwt.sign(
          {
            id: user._id,
            role:user.role
          },
          secret,
          { expiresIn: '1d' },
        )

        return res
          .status(httpStatus.OK)
          .send({ user: user, token: token })
      } else {
        return res.status(httpStatus.BAD_REQUEST).send('Password is wrong!')
      }
    } catch (error) {
      next(error)
    }
  }

