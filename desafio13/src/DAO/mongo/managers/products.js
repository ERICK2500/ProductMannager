import productModel from "../models/product.js";

export default class ProductManager {

    categories = async () => {
        try {
            const categories = await productModel.aggregate([
                {
                    $group: {
                        _id: null,
                        categories: { $addToSet: "$category" }
                    }
                }
            ])

            return categories[0].categories

        }
        catch (err) {
            
            return err
        }

    }

    getProductsView = async () => {
        try {
            return await productModel.find().lean();

        } catch (err) {
            return err
        }
    };

    getProducts = async (filter, options) => {
        try {
            return await productModel.paginate(filter, options);

        } catch (err) {
            return err
        }
    }

    getProductById = async (id) => {
        try {
            return await productModel.findById(id)

        } catch (err) {
            return err.message
        }

    }


    addProduct = async (product) => {
        try {
            console.log('Product to be added:', product);
            await productModel.create(product);
            const addedProduct = await productModel.findOne({ code: product.code });
            console.log('Product added successfully:', addedProduct);
            return addedProduct;
        } catch (err) {
            console.error('Error adding product:', err);
            return err;
        }
    }

    updateProduct = async (id, product) => {
        try {
            return await productModel.findByIdAndUpdate(id, { $set: product });
        } catch (err) {
            return err
        }

    }

    deleteProduct = async (id) => {
        try {
            return await productModel.findByIdAndDelete(id);
        } catch (err) {
            return err
        }

    }

}