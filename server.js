const express = require("express");
const PORT = process.env.PORT || 3000
const app = express();

console.log('dis node')

const foods = [
    'burger',
    'fries',
    'pizza'
];

//make all of the files in public available
app.use(express.static("public"));

//get req to home page and then a function
app.get("/", function(req, res){
    //.sendFile transfers the file at the hiven path and it sets the Content-Type response HTTP header fiels based on the file name extension
    res.sendFile(_dirname + "/index.html")
});

//send the default array to the page
app.get("/foods", function(req, res){
    // express helps us tak JS objects and send them as json
    res.json(foods)
})

//listen for requests
app.listen(PORT, () => {
    console.log(`your app is listening on ${PORT}`);
});