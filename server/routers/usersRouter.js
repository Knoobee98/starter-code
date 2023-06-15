const express = require('express')
const router = express.Router()

const userController = require("./../controllers/usersController")

router.post('/signIn', userController)

module.exports = router