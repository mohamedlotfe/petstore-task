const Product = require('./product');


module.exports = {
    findOne: (_id) => {
        return new Promise(async (resolve, reject) => {
            try {
                const product = await Product.findOne({ _id });
                return resolve(product);
            } catch (error) {
                reject(error);
            }

        })
    },
    findAll: () => {
        return new Promise(async (resolve, reject) => {
            try {
                const products = await Product.find();
                return resolve(products);
            } catch (error) {
                reject(error);
            }

        })
    },
    create: (productObj) => {
        return new Promise(async (resolve, reject) => {
            try {
                productObj = new Product(productObj);
                const product = await Product.create(productObj);
                return resolve(product)

            } catch (error) {
                reject(error)
            }
        });
    },
    update: (_id, newValues) => {
        return new Promise(async (resolve, reject) => {
            try {
                const product = await Product.findOne({ _id })
                if (!product) reject({ error: 'User Not Found' })

                product.name = newValues.name ? newValues.name : product.name;
                product.price = newValues.price ? newValues.price : product.price;
                product.company_id = newValues.company_id ? newValues.company_id : product.company_id;

                await product.save()
                return resolve(product)

            } catch (error) {
                reject({ error })
            }
        });
    },
    delete: (_id) => {
        return new Promise(async (resolve, reject) => {
            try {
                const product = await Product.deleteOne({ _id })
                return resolve(product)

            } catch (error) {
                reject({ error })
            }
        });
    }
}