import dbConnect from "../../../util/mongo.js"
import Cart from "../../../models/Cart.js"
export default async function handler(req, res) {
    const {method, query: {id}} = req;

    dbConnect();

    if( method === "GET") 
    {
         try{
             //fetching all coffee-shop data
             //await because it s an async process
             const cart = await Cart.findById(id);
             res.status(200).json(cart);
 
         }catch(err) {
             res.status(500).json(err);
         }
    }


    if (method === "PUT")
    {
        try{
            //taking the data from json postman body
         //    req.body
         //status 201 = added successfully
         const cart = await Cart.findByIdAndUpdate(id,req.body,{
             new:true,
         });
         res.status(201).json(cart);
 
 
        }catch(err)
        {
            //server error
            res.status(500).json(err);
        }
 
    }

    if (method === "DELETE")
    {
        try{
         await Cart.findByIdAndDelete(id);
         res.status(200).json("The product has been deleted!");
 
 
        }catch(err)
        {
            //server error
            res.status(500).json(err);
        }
 
    }

}