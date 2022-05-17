const router = require("express").Router();


const {
    getSinglecart,
    createcart,
    deletecart,
    additemtocart,
    removeproductfromcart,
    buycart
} = require('../../controllers/cartcontrollers');

router.route('/').post(createcart);

router.route('/:id').get(getSinglecart).delete(deletecart).post(buycart);

router.route('/:id/product/:id').post(additemtocart).delete(removeproductfromcart);

module.exports = router;
