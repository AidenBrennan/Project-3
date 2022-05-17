const router = require("express").Router();

const {
    createuser,
    deleteuser
} = require('../../controllers/usercontrollers');

router.route('./').post(createuser);

router.route('./:userid').delete(deleteuser)

module.exports = router;