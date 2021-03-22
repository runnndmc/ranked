//client side js, loaded by index.html
//runs everytime the page is loaded

/* 
const api = axios.create({
    baseURL: 'http://localhost:3000/foods'
}) */
//define the variables that reference elements on our page
const foodsUnorderedList = document.querySelector("#foods-ul");
const foodsInputForm = document.querySelector(".add-new-input-form");
const foodInput = document.querySelector("new-input");



//add a helper function that creates a list item for a newly inputted food
function appendNewFood(food) {
  //create a new element
  const newListItem = document.createElement("li");
  let deleteButton = document.createElement("button");
  //have the new element have the text of the input given
  newListItem.innerText = food;
  deleteButton.innerText = "delete";

/*   const formData = {
    addedFood: food,
  };
  const request = new Request("/add/:food/:rank", {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  fetch(request)
  .then((response) => response.json())
  .then((result) => {
    console.log("success:", result);
  })
  .catch((error) => {
    console.error("Error:", error);
  }); */

  newListItem.append(deleteButton);
  //grab the parent of the list item and append the new element created
  foodsUnorderedList.appendChild(newListItem);
  deleteButton.addEventListener("click", deleteListItem);
  return deleteButton;
}




function deleteListItem() {
  this.parentNode.remove();
}





//fetch the initial list of foods in server.js
fetch("/foods")
  .then((response) => response.json()) //parse the json from the server
  .then((json) => {
    console.log(json);
    const fullJson = json
  
    foodsUnorderedList.firstElementChild.remove();


    function findUser(user){
      fullJson.forEach((element) => {
        if (element.username === 'daynac143')
        return element.foods.forEach(appendNewFood);
      })
    }



  // const useFound = fullJson.filter((user)=> {
  //     if(user === json.username){
  //       console.log(user) 
        
  //     } else {
  //       return "user not found"
  //     }

  //   })

    foodsInputForm.addEventListener("submit", (event) => {
      event.preventDefault();

      let newFood = foodsInputForm.foods.value; //.food.value;
      console.log(newFood);

      example.push(newFood);

      appendNewFood(newFood);
    

/*       let method = "POST"
      let postData = newFood
      let shouldBeAsync = true;
      let request = new XMLHttpRequest()
      request.onload = function(){
        var status = request.status; // HTTP response status, e.g., 200 for "200 OK"
        var data = request.responseText
      }

      request.open(method, api, shouldBeAsync)
      request.setRequestHeader("Content-Type", "application/json")
      request.send(postData)
      foodsInputForm.reset(); */
      // foodsInputForm.elements.focus();
    });
  });

//let newFood = foodsInputForm.foods.value
//let newRank = foodsInputForm.ranks.value
//const formData = new FormData(foodsInputForm);


/* fetch(request)
  .then((response) => response.json())
  .then((result) => {
    console.log("success:", result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
 */
//.then(foods => {
/// console.log(foods)
//remove the loading text
//iterate through every food and add it to our page
//listen for the form to be submitted and add a new food when it is
//stop our submission from refreshing the page
//get food value
//and add it to the list

//});
