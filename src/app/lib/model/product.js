import mongoose, { Schema } from 'mongoose';
const ProductSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number
    },
    company: {
        type: String
    },
    color: {
        type: String
    },
    category: {
        type: String
    },

})

const Product = mongoose.models.products || mongoose.model("products", ProductSchema)

export default Product;