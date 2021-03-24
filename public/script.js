//client side js, loaded by index.html
//runs everytime the page is loaded

//define the variables that reference elements on our page

const foodsUnorderedList = document.querySelector("#foods-ul");
const foodsInputForm = document.querySelector(".add-new-input-form");
const foodInput = document.querySelector("new-input");

// create a list item for a newly inputted food
function appendNewFood(food) {
  const newListItem = document.createElement("li");
  const deleteButton = document.createElement("button");

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
    const fullJson = json;

    foodsUnorderedList.firstElementChild.remove();

    function findUser(user) {
      fullJson.forEach((element) => {
        if (element.username === "daynac143")
          return element.foods.forEach(appendNewFood);
      });
    }

    foodsInputForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const formElements = document.querySelector(".add-new-input-form")
        .elements;
      const formData = {};
      for (let i = 0; i < formElements.length; i++) {
        if (formElements[i].type !== "submit") {
          formData[formElements[i].name] = formElements[i].value;
        }
      }
      console.log(formData);

      // const serializeArray = (formElements) => {
      //   const arr = [];
      //   Array.prototype.slice.call(formElements).forEach(function (field) {
      //     console.log(field)
      //     arr.push({
      //       username: field.username,
      //       foods: field.foods,
      //       ranks: field.ranks,
      //     });
      //   });
      //   return arr;
      // };

      // console.log(serializeArray(formElements))

      // const data = new URLSearchParams(new FormData(form).entries())

      // let newFood = foodsInputForm.foods.value;
      // let newRank = foodsInputForm.ranks.value;
      // let userInput = foodsInputForm.username.value;

      // console.log(newFood);
      // console.log(newRank);
      // console.log(userInput);

      // fullJson.push(newFood);

      // appendNewFood(newFood);

      // let method = "POST"
      // let postData = newFood
      // let shouldBeAsync = true;
      // let request = new XMLHttpRequest()
      // request.onload = function(){
      //   var status = request.status; // HTTP response status, e.g., 200 for "200 OK"
      //   var data = request.responseText
      // }
      // request.open(method, api, shouldBeAsync)
      // request.setRequestHeader("Content-Type", "application/json")
      // request.send(postData)
      // foodsInputForm.reset();
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

// var serializeArray = function (form) {
//   var arr = [];
//   Array.prototype.slice.call(form.elements).forEach(function (field) {
//     if (
//       !field.name ||
//       field.disabled ||
//       ["file", "reset", "submit", "button"].indexOf(field.type) > -1
//     )
//       return;
//     arr.push({
//       name: field.name,
//       value: field.value,
//     });
//   });
//   return arr;
// };
