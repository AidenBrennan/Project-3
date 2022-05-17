const cartRoutes = require('./cartroutes')
const router = require('express').Router();
const productRoutes = require('./productroutes');
const userroutes = require('./userroutes')

router.use('/product', productRoutes);
router.use('/cart', cartRoutes)
router.use('./user', userroutes)

module.exports = router;