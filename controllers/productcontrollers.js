const { product } = require("../models");

module.exports = {
    createproduct(req, res) {
        product.create(req.body)
          .then((product) => res.json(product))
          .catch((err) => res.status(500).json(err));
      },
    updateproduct(req, res) {
        product.findOneAndUpdate(
                { _id: req.params.productId },
                { $Set: req.body },
                { runValidators: true, new: true }
        )
        .then((product) => res.json(product))
        .catch((err) => res.status(500).json(err));
        },
    removeproduct(req, res) {
            product.findByIdAndDelete(
                    { _id: req.params.productId }
            )
            .then((product) => res.json(product))
            .catch((err) => res.status(500).json(err));
        },
    getSingleproduct(req, res) {
            product.findOne(
                { _id: req.params.productId }
                )
            .then((product) => res.json(product))
            .catch((err) => res.status(500).json(err));
}
}

