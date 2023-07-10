const dataBase = require("@makeitrealcamp/db-mock");
const {
   getProducts,
   getProductById,
   postProduct,
   putProduct,
   deleteProduct,
} = require("../models/models");

const handleHealthCheck = () => {
   res.status(200).send("Ok");
};

const handleGetProducts = (req, res) => {
   try {
      const response = getProducts();

      res.status(200).json({ message: "Product found", data: response });
   } catch (err) {
      res.status(400).json({ message: err.message });
   }
};

const handleGetProductById = (req, res) => {
   try {
      const { id } = req.params;
      const response = getProductById(id);

      res.status(200).json({ message: "User found by id", data: response });
   } catch (err) {
      res.status(400).json({ message: err.message });
   }
};

const handlePostProduct = (req, res) => {
   try {
      const { product_name, color, category, price } = req.body;
      const response = postProduct({ product_name, color, category, price });

      res.status(201).json({ message: "Product created", data: response });
   } catch (err) {
      res.status(400).json({ message: err.message });
   }
};

const handlePutProduct = (req, res) => {
   try {
      const { id } = req.params;
      const { product_name, color, category, price } = req.body;
      const response = putProduct(id, { product_name, color, category, price });

      res.status(200).json({ message: "Product edited", data: response });
   } catch (err) {
      res.status(400).json({ message: err.message });
   }
};

const handleDeleteProduct = (req, res) => {
   try {
      const { id } = req.params;
      const response = deleteProduct(id);

      res.status(200).json({ message: "Product deleted", data: response });
   } catch (err) {
      res.status(400).json({ message: err.message });
   }
};

module.exports = {
   handleHealthCheck,
   handleGetProducts,
   handleGetProductById,
   handlePostProduct,
   handlePutProduct,
   handleDeleteProduct,
};
