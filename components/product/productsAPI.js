var express = require("express");
const router = express.Router();
const controller = require('./productsController')

router.get("/products", async (req, res) => {
    let results = await controller.getProducts();
    res.send(results);
});

router.get("/products/:id", async (req, res) => {
    let id = req.params.id
    let results = await controller.getProductById(id);
    res.send(results);
});

router.post("/products", async (req, res) => {
    let { product = {} } = req.body || {};
    let results = await controller.addProduct(product);
    res.send(results);

});

router.patch("/products/:id", async (req, res) => {
    let { product = {} } = req.body || {};
    let id = req.params.id
    let newProducts = await controller.updateProduct(id, product);
    res.send(newProducts);
});

router.delete("/products/:id", async (req, res) => {
    let id = req.params.id
    let newProducts = await controller.deleteProduct(id);
    res.send(newProducts);
});

module.exports = router;
