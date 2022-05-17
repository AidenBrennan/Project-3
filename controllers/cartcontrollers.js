const { cart } = require("../models");

module.exports = {
    createcart(req, res) {
        cart.create(req.body)
          .then((cart) => res.json(cart))
          .catch((err) => res.status(500).json(err));
      },
      additemtocart(req, res) {
        cart.findOneAndUpdate(
                { _id: req.params.cartId },
                { $addToSet: { product: req.body } },
                { runValidators: true, new: true }
        )
        .then((cart) => res.json(cart))
        .catch((err) => res.status(500).json(err));
        },
       removeproductfromcart(req, res) {
            cart.findOneAndUpdate(
                    { _id: req.params.cartId },
                    { $pull: { product: { productId: req.params.productId} } }
            )
            .then((cart) => res.json(cart))
            .catch((err) => res.status(500).json(err));
        },
    getSinglecart(req, res) {
            cart.findOne(
                { _id: req.params.cartId }
                )
            .then((cart) => res.json(cart))
            .catch((err) => res.status(500).json(err));
        },
            deletecart(req, res) {
                cart.findOneAndDelete(
                        { _id: req.params.cartId }
                )
                .then((cart) => res.json(cart))
                .catch((err) => res.status(500).json(err));
        },
        buycart(req, res) {
        },
}