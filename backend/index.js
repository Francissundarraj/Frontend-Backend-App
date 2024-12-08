const express = require("express")
const cors = require("cors")


const app = express()

app.use(cors())


var FruitList = ["apple"];


app.get("/fruitname", function(req,res) {

  console.log(req.query.newfruit)
  res.send(req.query)
 
})


app.listen(5000, function () {
    console.log("Server Started")
})