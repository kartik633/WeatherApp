const express = require('express');
const path  = require('path');
const app = express();
const port = process.env.PORT || 3000;

// public static path to which directory you are
// console.log(path.join(__dirname,"../public/"));

const static_path = path.join(__dirname,"../public");

app.use(express.static(static_path));

// routing

app.get("",(req,res)=>{
  res.send("Welcome kartik");
})

app.get("/about",(req,res)=>{
  res.send("Welcome it is the about page");
})

app.get("/weather",(req,res)=>{
  res.send("Welcome it is the weather page");
})

app.get("*",(req,res)=>{
  res.send("404 error page");
})

app.listen(port ,() =>{
  console.log('Listening on port at ${port}');
})
