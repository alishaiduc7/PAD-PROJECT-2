import mongoose from "mongoose"

//the schema that defines our product: title, price, sizes, etc
const OrderSchema = new mongoose.Schema({
    customer:{
        type: String,
        required: true,
        maxlength: 60,
    },
    address:{
        type: String,
        required: true,
        maxlength: 250,
    },
    total:{
        type: Number,
        required: true,
        maxlength: 60,
    },
    status: {
        type: Number,
        default: 0 
        // initial state
    },
    paymethod: {
        type: Number,
        required: true
    },
}, {timestamps: true} 
// creation date of any update
);
//in case there is an existing it will work with it, else it will make one
export default mongoose.models.Order || mongoose.model("Order", OrderSchema);