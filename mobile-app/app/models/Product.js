import mongoose, { trusted } from "mongoose";

//the schema that defines our product: title, price, sizes, etc
const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 60,
    },
    description: {
      type: String,
      required: true,
      maxlength: 250,
    },
    image: {
      type: String,
      required: true,
      maxlength: 250,
    },
    prices: {
      type: [Number],
      required: true,
    },
    extras: {
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
    /*in_cart: {
      type: {
        status: {
          type: Boolean,
          required: true,
        },
        extra: {
          type: [String],
        },
        price: {
          type: Number,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
      required: true,
    },*/
  },
  { timestamps: true }
  // creation date of any update
);
//in case there is an existing it will work with it, else it will make one
export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
