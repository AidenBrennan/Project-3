const router = require("express").Router();


const {
    getsinglecart,
    createcart,
    deletecart,
    additemtocart,
    removeproductfromcart,
    buycart
} = require('../../controllers/cartcontrollers');

router.route('./').post(createcart);

router.route('./:id').get(getsinglecart).delete(deletecart).post(buycart);

router.route('./:id/product').post(additemtocart);

router.route('./cartId/product/:/productId').delete(removeproductfromcart);
