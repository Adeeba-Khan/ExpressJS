
// const http = require('http');
const express = require('express');
const app = express();
app.use((req,res,next)=>{
    console.log("In the middleware");
    next();
});
app.use((req,res,next)=>{
    console.log("In the another middleware");
    res.send('<h1>Hello from Express!</h1>');
});


// const fs = require('fs');
// const routes= require('./routes');
// const server = http.createServer(routes.handler);
// console.log(routes.someText);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});