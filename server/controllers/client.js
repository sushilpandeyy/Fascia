import Product from "../models/Product.js"
import ProductStat from "../models/ProductStat.js"

export const getProducts = async(req, res) => {
    try {
        const products = await Product.find();

        const productsWithStat = await Promise.all(
            products.map(async (product) => {
                const stat = await ProductStat.find({
                    ProductId: product._Id
                })
                return {
                    ...product._doc,
                    stat,
                }
            }));
            res.status(200).json(productsWithStat);
    } catch (error){
        res.status(404).json({message: error.message});
    }
}