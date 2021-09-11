const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 80;
const static_path = path.join(__dirname,"./public")
app.use(express.static(static_path ))
app.set('view engine', 'hbs');
app.get("/",(req,res)=>{
  res.render('index');
})

app.get("/home",(req,res)=>{
  res.render('index');
})

app.get("/weather",(req,res)=>{
  res.render('weather');
})

app.get("*",(req,res)=>{
  res.render('error');
})

app.listen(port,()=>{
  console.log(`listning at port ${port}`);
})

