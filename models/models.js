const dataBase = require("@makeitrealcamp/db-mock");

const getProducts = () => {
   const products = dataBase.findAll();
   return products;
};

const getProductById = (id) => {
   const product = dataBase.findById(id);
   return product;
};

const postProduct = (body) => {
   const product = dataBase.insert({ ...body });

   return product;
};

const putProduct = (id, body) => {
   const product = dataBase.update({ id, ...body });

   return product;
};

const deleteProduct = (id) => {
   const product = dataBase.remove(id);

   return product;
};

module.exports = {
   getProducts,
   getProductById,
   postProduct,
   putProduct,
   deleteProduct,
};
