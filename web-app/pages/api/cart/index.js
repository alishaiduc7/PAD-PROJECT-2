import dbConnect from "../../../util/mongo";
import Cart from "../../../models/Cart";

export default async function handler(req, res){
    const {method} = req;
    dbConnect();

    if( method === "GET") 
   {
        try{
            //fetching all coffee-shop data
            //await because it s an async process
            const cart = await Cart.find();
            res.status(200).json(cart);

        }catch(err) {
            res.status(500).json(err);
        }
   }
   if (method === "POST")
   {
       try{
           //taking the data from json postman body
        //    req.body
        //status 201 = added successfully
        const cart = await Cart.create(req.body);
        res.status(201).json(cart);
       }
       catch(err){
           //server error
           res.status(500).json(err);
       }
   }
}