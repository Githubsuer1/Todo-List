
// Getting the input element by id
let inputText = document.getElementById("inp");

// Getting the addBtn element by id
let addBtn = document.getElementById("btnAdd");

// Adding eventListener to the addBtn with a callback function that is going to add new element to the page
addBtn.addEventListener("click",function(){

    //Checking if btn is getting pressed without filling the input section
    if(inputText.value === ""){
        alert("Please enter the task!");
    }

    else{

        //creating new ul element to add the content
        let newElement = document.createElement("ul");

        // newly created element containing the text and a remove btn into it using back ticks
        newElement.innerHTML = `${inputText.value} <button id="btnRemove" class="btn" >Remove</button>`;

        //Getting the element that will go to contain the newly created element into it
        let listContainer = document.querySelector(".listContainer");

        // newly created element appended to the element
        listContainer.appendChild(newElement);

        // the inputValue of the input section will now be empty 
        inputText.value = "";

        // element that is going to delete the newly created element
        let remBtn = newElement.querySelector("#btnRemove");

        // adding eventListener having a callback function that is going to delete newly created element
        remBtn.addEventListener("click", function (){
            newElement.remove()
        });

    }

});









