const products = []; //Arreglo en donde se almancenaran todos los productos ingresados

exports.getAddProduct = (req, res, next) => {
  //Se envia la vista html (.ejs) de la pagina al usuario.
  res.render("add-product", {
    pageTitle: "Add product",
    path: "/admin/add-product"
  });
};

exports.postAddProduct = (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
};

exports.getProducts =  (req, res, next) => {
    //Se envia la vista html (.ejs) de la pagina al usuario    
    res.render("shop", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
    });
  }