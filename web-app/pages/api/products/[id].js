import dbConnect from "../../../util/mongo.js"
import Product from "../../../models/Product.js"

//async because we don't know how much time it s gonna take each operation
export default async function handler(req, res) {
   const {method, query:{id},} = req;

   //import my database here
   dbConnect();
    //destructure the request 
   if( method === "GET") 
   {
        try{
            //fetching all coffee-shop data
            //await because it s an async process
            const product = await Product.findById(id);
            res.status(200).json(product);

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
        const product = await Product.create(req.body);
        res.status(201).json(product);


       }catch(err)
       {
           //server error
           res.status(500).json(err);
       }

   }

   if (method === "DELETE")
   {
       try{
           //taking the data from json postman body
        //    req.body
        //status 201 = added successfully
        const product = await Product.create(req.body);
        res.status(201).json(product);


       }catch(err)
       {
           //server error
           res.status(500).json(err);
       }

   }
}