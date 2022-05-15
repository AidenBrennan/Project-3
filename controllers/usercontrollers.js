const { user } = require('../models') 

module.exports = {
    createuser(req, res) {
        user.create(req.body)
          .then((user) => res.json(user))
          .catch((err) => res.status(500).json(err));
      },
      deleteuser(req, res) {
        user.findOneAndDelete(
                { _id: req.params.userId }
        )
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err));
      },
      addcarttouser(req, res) {
        cart.findOneAndUpdate(
                { _id: req.params.userId },
                { $addToSet: { cart: req.body } },
                { runValidators: true, new: true }
        )
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err));
        },
}