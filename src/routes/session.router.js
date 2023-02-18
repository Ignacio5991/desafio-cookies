const {Router} = require('express');
const router = Router();
const userModel = require('../dao/models/users.model')
const viewSession = require ('../controller/sessions.controller')




router.post("/register",viewSession.registerForm)

router.post("/login",viewSession.login)

router.post("/logout",viewSession.logOut)

module.exports = router;