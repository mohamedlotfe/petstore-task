
const productsDAL = require('./productsDAL');
const { validateProduct } = require('../../helper/helpers');
module.exports = {
    getProducts: async () => {
        try {
            let results = await productsDAL.findAll();
            return ({ error: null, results });
        } catch (error) {
            return ({ error: error, results: null })
        }

    },
    getProductById: async (id) => {
        try {
            if (!id) return ({ error: "Missing Input Data!!" })

            let results = await productsDAL.findOne(id);
            return ({ error: null, results });
        } catch (error) {
            return ({ error: error, results: null })
        }

    },
    addProduct: async (product = validateProduct()) => {
        try {
            if (!product) return ({ error: "Missing Input Data!!" })

            let results = await productsDAL.create(product);
            return ({ error: null, results });
        } catch (error) {
            return ({ error: error, results: null })
        }
    },
    updateProduct: async (id = null, product) => {
        try {
            if (!id) return ({ error: "Missing Input Data!!" })

            let results = await productsDAL.update(id, product);
            return ({ error: null, results });
        } catch (error) {
            return ({ error: error, results: null })
        }
    }
    ,
    deleteProduct: async (id) => {
        try {
            if (!id) return ({ error: "Missing Input Data!!" })

            let results = await productsDAL.delete(id);
            return ({ error: null, results });
        } catch (error) {
            return ({ error: error, product: null })
        }
    }

}
