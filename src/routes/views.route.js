const {Router} = require('express')
const viewControllers = require('../controller/views.controller')

const router = Router();

router.get('/products', viewControllers.views)
router.get('/carts/:cid', viewControllers.viewCart);

//Rutas del Login y register

router.get('/',(req,res)=>{
    res.render('login')
});

router.get('/register',(req,res)=>{
    res.render('register')
});

router.get('/perfil',(req,res)=>{
    res.render('perfil')
});


module.exports = router;