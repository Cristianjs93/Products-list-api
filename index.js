require("dotenv").config();
const express = require("express");
const cors = require("cors");

const {
   handleHealthCheck,
   handleGetProducts,
   handleGetProductById,
   handlePostProduct,
   handlePutProduct,
   handleDeleteProduct,
} = require("./controllers/controllers.js");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());

app.use(express.json());

app.get("/healthcheck", handleHealthCheck);

app.get("/products", handleGetProducts);

app.get("/products/:id", handleGetProductById);

app.post("/products/createProduct", handlePostProduct);

app.put("/products/updateProduct/:id", handlePutProduct);

app.delete("/products/deleteProduct/:id", handleDeleteProduct);

app.listen(PORT, () => {
   console.log(`Successfully running at http://localhost:${PORT}`);
});
