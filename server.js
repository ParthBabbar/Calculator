const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
  var n1 = Number(req.body.num1);
  var n2 = Number(req.body.num2);
  var ans = n1 + n2;
  res.send("Thanks, Your ans is " + ans);
});

app.get("/bmicalculator", function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res){
  var w = Number(req.body.num1);
  var h = Number(req.body.num2);
  var n = w/(h*h);
  res.send("Your BMI is " + n);
});


app.listen(3000, function(){
  console.log("Server started on port 3000");
})