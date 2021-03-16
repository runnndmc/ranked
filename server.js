const express = require("express");
/* const bodyParser = require("body-parser");
const logger = require("morgan");
const cors = require("cors"); */
const PORT = process.env.PORT || 3000;
const app = express();

console.log("dis node");
//listen for requests
app.listen(PORT, () => {
  console.log(`your app is listening on ${PORT}`);
});

const foods = [
 "The Cure",
"The Lamb Burger",
 "Bar Room Burger"
];

//make all of the files in public available https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));
/* app.use(cors());
app.use(bodyParser.json());
app.use(logger("dev"));
 */
//get req to home page and then a function https://expressjs.com/en/starter/basic-routing.html
app.get("/", function (require, res) {
  //.sendFile transfers the file at the given path and it sets the Content-Type response HTTP header fields based on the file name extension
  res.sendFile(_dirname + "/index.html");
});

//send the default array to the page
app.get("/foods", function (req, res) {
  // express helps us tak JS objects and send them as json
  res.json(foods);
  console.log(foods[0].name);
});






app.get("/foods/:id", function (req, res) {
    
 const id = (req.params._id);
  const foodItem = foods.filter(food => food._id === id)[0];
  res.json(foodItem); 
});
/*
app.post("/foods", function (req, res) {
  const food = req.body;
  foods.push(food);
  res.json(foods);
});

app.put("/foods/:id", function (req, res) {
  const id = req.params.id;
  const foodIndex = foods.findIndex((food) => food._id === id);
  const food = { ...foods[foodIndex], ...req.body };
  foods.splice(foodIndex, 1, food);
  res.json(food);
});

app.patch("/foods/:id", function (req, res) {
  const food = foods.find((food) => food.id === id); // parseInt(req.params.id)); ?
  if (!food) return res.status(404).json({ message: "Not Found" });

  food.rank = req.body.rank;

  res.json(food);
});

app.delete("/foods/:id", function (req, res) {
  const id = req.params.id;
  const foodIndex = foods.findIndex((food) => food._id === id);
  foods.splice(foodIndex, 1);
  res.json(foods);
});
*/