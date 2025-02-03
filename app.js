
// const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use('/add-product',(req,res,next)=>{
 console.log('In the middleware!');
 res.send('<form action="product" method="post"><input type="text" name="title"><input type="number" name="size"><button type="submit">Add product</button></form>');

});

app.use('/product',(req,res,next)=>{
    console.log("body",req.body.title);
    console.log("size",req.body.size);

    res.redirect('/');
})
// app.use((req,res,next)=>{
//     console.log("In the middleware");
//     next();
// });
app.use((req,res,next)=>{
    console.log("In the another middleware");
    res.send('<h1>Hello from Express!</h1>');
});



app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});