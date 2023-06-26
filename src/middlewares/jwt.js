const expressjwt = require('express-jwt')

const authjwt = () => {
    const secret = process.env.secret
    return expressjwt({
        secret,
        algorithms: ['HS256'],
    }).unless({
        //non token urls
        path: [
            '/publications/category/search',
            '/publications/category/auth/login',
            '/publications/category/auth',
        ],
    })
}

module.exports = authjwt