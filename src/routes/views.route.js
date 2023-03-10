const {Router} = require('express')
const viewControllers = require('../controller/views.controller')

const router = Router();

router.get('/products', viewControllers.views)
router.get('/carts/:cid', viewControllers.viewCart);
router.get("/register",viewControllers.register);
router.get('/login',viewControllers.login);
router.get('/profile',viewControllers.profile);
router.get('/logout',viewControllers.logout);
module.exports = router;