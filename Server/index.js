const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
const product=require("./product.json")
const PORT = 3005;
app.get("/",(req,res)=>{
    res.json(product);
})
app.get("/product/:id", (req, res) => {
    const { id } = req.params;
    const data = product.filter((item) => item.id == id);
    res.json(data);
    console.log("data" + data);
  });
app.listen(PORT,()=>{
    console.log("server started ")
})