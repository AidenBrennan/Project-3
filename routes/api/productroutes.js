const router = require("express").Router();

const {
    createproduct,
    updateproduct,
    removeproduct,
    getSingleproduct,
} = require('../../controllers/productcontrollers')

router.route('./').post(createproduct);

router.route('./:id').put(updateproduct).delete(removeproduct).get(getSingleproduct)


