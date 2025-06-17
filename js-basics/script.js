const greetBtn = document.getElementById("greetBtn");
const mainHeading = document.getElementById("main-heading");
const description = document.getElementById("description");

function greet() {
    alert("Hello, welcome to js!");

    mainHeading.innerText = "You clicked the button!";
    description.innerText = "This was updated with js.";

    
}

greetBtn.addEventListener("click", greet);