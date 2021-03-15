//client side js, loaded by index.html
//runs everytime the page is loaded

console.log('ello')


//define the variables that reference elements on our page
const foodsUnorderedList = document.querySelector("#foods-ul");
const foodsInputForm = document.querySelector(".add-new-input-form");

//add a helper function that creates a list item for a newly inputted food 
function appendNewFood(food){
    //create a new element 
    const newListItem = document.createElement('li');
    let deleteButton = document.createElement('button');
    //have the new element have the text of the input given
    newListItem.innerText = food;
    deleteButton.innerText = "delete"

    newListItem.append(deleteButton)
    //grab the parent of the list item and append the new element created 
    foodsUnorderedList.appendChild(newListItem);
    deleteButton.addEventListener('click', deleteListItem)
    return deleteButton
}


function deleteListItem(){
    this.parentNode.remove()
}



//fetch the initial list of foods in server.js
fetch("/foods")
    .then(response => response.json()) //parse the json from the server
    .then(foods => {
        //remove the loading text
        foodsUnorderedList.firstElementChild.remove();
        //iterate through every food and add it to our page
        foods.forEach(appendNewFood);

        //listen for the form to be submitted and add a new food when it is
        foodsInputForm.addEventListener('submit', event => {

            //stop our submission from refreshing the page
            event.preventDefault();

            //get food value 
            let newFood = foodsInputForm.elements.food.value;
            //and add it to the list
            foods.push(newFood);
            appendNewFood(newFood);

            foodsInputForm.reset();
            foodsInputForm.elements.food.focus();

            console.log(localStorage)

/*             if(newFood){
                localStorage.setItem("foodKey", newFood)
                location.reload();
            }
 */
        });
    });
