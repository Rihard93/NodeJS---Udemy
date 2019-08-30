const Product = require("../models/product"); //Se manda a llamar el model product.js, el cual contiene la clase product.

exports.getAddProduct = (req, res, next) => {
  //Se envia la vista html (.ejs) de la pagina al usuario.
  res.render("admin/add-product", {
    pageTitle: "Add product",
    path: "/admin/add-product"
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  //Se envia la vista html (.ejs) de la pagina al usuario
  Product.fetchAll(products => {
    res.render("shop/product-list", {
      prods: products,
      pageTitle: "Shop",
      path: "/"
    });
  });
};
