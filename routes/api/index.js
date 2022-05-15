const cartRoutes = require('./cartroutes')
const router = require('express').Router();
const productRoutes = require('./productroutes');

router.use('/product', productRoutes);
router.use('/cart', cartRoutes)

module.exports = router;