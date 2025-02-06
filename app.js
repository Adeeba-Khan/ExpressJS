
// const http = require('http');
const express = require('express');

const bodyParser = require('body-parser');
const app = express();
const adminRouter = require('./route/admin.js');
const shopRouter = require('./route/shop.js');
app.use(bodyParser.urlencoded({extended:false}));

// app.use((req,res,next)=>{
//     console.log("In the middleware");
//     next();
// });
//path fixing
app.use('/route',adminRouter);
app.use('/route',shopRouter);
// Page not found
app.use((req,res,next)=>{
    res.status(404).send('<h1>Page Not Found</h1>');
});



app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});