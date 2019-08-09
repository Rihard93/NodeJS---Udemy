exports.get404 = (req, res, next) => {
  //Se envia la vista html (.ejs) de la pagina al usuario.
  res.status(404).render("404", { pageTitle: "Page Not Found", path: "" });
};
