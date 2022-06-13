import mongoose from "mongoose";
import Product from "./Product";

const productSchema = Product.schema;

const CartSchema = new mongoose.Schema({
  product: {
    type: [productSchema],
    required: true,
  },
  extra:{
    type: [
        {
          text: {
            type: String,
            required: true,
          },
          price: {
            type: Number,
            required: true,
          },
        },
      ],
  },
  price:{
    type: Number,
    required: true,
  },
  quantity:{
    type: Number,
    required: true
  }
});

export default mongoose.models.Cart || mongoose.model("Cart", CartSchema);
