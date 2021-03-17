const express = require("express");
const PORT = process.env.PORT || 3000
const app = express();

const fs = require('fs');
const { finished } = require("stream");
const data = fs.readFileSync('./public/foods.json');
const foods = JSON.parse(data)

console.log(foods)

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


/* app.get("/:path", function(req, res){
    const path = req.params.path
    res.json({
        data: path
    })
})

app.get("/:profile/:username", function(req, res){
    const profile = req.params.profile
    const username = req.params.username
    res.json({
        profile: profile,
        username: username
    })
})
*/
app.post('/post', (req, res) => {
    const body = req.body
    console.log(body)
    res.json({
        confirmation: 'success, post req',
        data: body
    })
})

app.get("/query", function(req, res){
    const food = req.query.food
    const rank = req.query.rank

    const data ={
        food: food,
        rank: rank 
    }
    res.render('profile', data)
}) 

app.get("/add/:food/:rank?", addFood)

function addFood(req, res){
    const data = req.params
    const food = data.food
    const rank = Number(data.rank)
    let reply;
    if(!rank){
        reply={
            msg: "rank is required"
        }
    } else{
        foods[food] = rank
        const data = JSON.stringify(foods, null, 2)
        fs.writeFile('./public/foods.json', data, finished)

        function finished(err){
            console.log('all set')
        }
        reply={
            food: food,
            rank: rank,
            status: "success, add food"
        }
    }
    res.send(reply)
}



//listen for requests
app.listen(PORT, () => {
    console.log(`your app is listening on ${PORT}`);
});