const Product = require("../models/product.models");

exports.product_create = function (req, res, next) {
  let product = new Product({
    name: req?.body?.name,
    price: req?.body?.price,
  });

  product.save((err) => {
    if (err) {
      return next(err);
    }
    res.send("Product Created successfully");
  });
};

exports.product_findAll = function (req, res) {
  Product.find(req.params.id, function (err, product) {
    if (err) return next(err);
    res.send(product);
  });
};

exports.product_findOne = function (req, res) {
  Product.findById(req.params.id, function (err, product) {
    if (err) return next(err);
    res.send(product);
  });
};
