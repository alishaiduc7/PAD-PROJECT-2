import mongoose from "mongoose";
import Product from "./Product";

const productSchema = Product.schema;

const CartSchema = new mongoose.Schema({
    products:{
        type: [productSchema],
        required: true,
    }
});

export default mongoose.models.Cart || mongoose.model("Cart", CartSchema);