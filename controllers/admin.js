const Product = require("../models/product"); //Se manda a llamar el model product.js, el cual contiene la clase product.

exports.getAddProduct = (req, res, next) => {
  //Se envia la vista html (.ejs) de la pagina al usuario.
  res.render("admin/add-product", {
    pageTitle: "Add product",
    path: "/admin/add-product"
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(title, imageUrl, description, price);
  product.save();
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render("admin/products", {
      prods: products,
      pageTitle: "Admin Products",
      path: "/admin/products"
    });
  });
};
