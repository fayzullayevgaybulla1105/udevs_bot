const Router = require('express')
const router = new Router()
const userController = require('../controller/userController')

router.post('/registration', userController.registration)
    .post('/login', userController.login)
    .get('/auth', userController.check)

module.exports = router