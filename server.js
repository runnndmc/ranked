const express = require("express");
const path = require('path')
const app = express();
const PORT = process.env.PORT || 3000

'use strict';
const fs = require('fs');

const data =  fs.readFileSync('./public/foods.json');
// const readFile = path => fs.readFileSync(path, 'utf8');
// const foodsFile = readFile('./public/foods.json');
// const foods1 = JSON.parse(foodsFile);
const foods = JSON.parse(data)

//console.log(foods)

/* try{
    const databases = JSON.parse(data)
    databases.forEach(db => {
        console.log(`${db.food}: ${db.rank}`)
    })
} catch(err){
    console.log(`${err}`)
} 
 */

//make all of the files in public available
app.use(express.static("public"));


//get req to home page and then a function
app.get("/", function(req, res){
    //.sendFile transfers the file at the given path and it 
    //sets the Content-Type response HTTP header field
    // based on the file name extension

    // let options = {
    //     root: path.join(__dirname)
    // }
    // let jsonFile = 'foods.json'
    // res.sendFile(jsonFile, options, function(err){
    //     if(err){
    //         next(err);
    //     } else{
    //         console.log('sent:', jsonFile)
    //     }
    // })
    res.sendFile(_dirname + "/index.html")
});

//send the default array to the page
app.get("/foods", function(req, res){
    // express helps us take JS objects and send them as json
    res.json(foods)
})

app.get("/foods/:newFood", addFood)

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
app.listen(PORT, (err) => {
    if(err) console.log(err)
    console.log(`your app is listening on ${PORT}`);
});

module.exports = app
/* 

app.get("/:path", function(req, res){
    const path = req.params.path
    res.json({
        data: path
    })
}) */

/* app.post("/", function(req, res){
    const body = req.body

    res.json({
        confirmation: 'success',
        foodData: body
    })
})
*/

// app.post(function(req, res){
//     const foodData = select('#analyze').value()
//     console.log(foodData)
//     res.json({
//         confirmation: 'success, post req',
//         food: foodData,
//        rank: rankData
//     })
// })


// app.get("/query", function(req, res){
//     const food = req.query.food
//     const rank = req.query.rank

//     const data ={
//         food: food,
//         rank: rank 
//     }
//     res.render('profile', data)
// })  

