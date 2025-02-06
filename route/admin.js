const express = require('express');

const router = express.Router();


router.use('/add-product',(req,res,next)=>{
    console.log('In the middleware!');
    res.send('<form action="product" method="post"><input type="text" name="title"><input type="number" name="size"><button type="submit">Add product</button></form>');
   
   });
   
   router.use('/product',(req,res,next)=>{
       console.log("body:",req.body.title);
       console.log("size:",req.body.size);
   
       res.redirect('/');
   });
   module.exports=router;
