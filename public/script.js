//client side js, loaded by index.html
//runs everytime the page is loaded

console.log('ello')

//define the variables that reference elements on our page
const foodsList = document.getElementById("foods");
const foodsForm = document.querySelector("form");

//add a helper function that creates a list item for a given food 
function appendNewFood(food){
    const newListItem = document.createElement('li');
    newListItem.innerText = food;
    foodsList.appendChild(newListItem);
}

//fetch the initial list of dreams
fetch("/foods")
    .then(response => response.json()) //parse the json from the server
    .then(foods => {
        //remove the loading text
        foodsList.firstElementChild.remove();

        //iterate through every food and add it to our page
        foods.forEach(appendNewFood);

        //listen for the form to be submitted and add a new food when it is
        foodsForm.addEventListener('submit', event => {
            //stop our submission from refreshing the page
            event.preventDefault();
            //get food value and add it to the list
            let newFood = foodsForm.elements.food.value;
            foods.push(newFood);
            appendNewFood(newFood);

            foodsForm.reset();
            foodsForm.elements.food.focus();
        });
    });
