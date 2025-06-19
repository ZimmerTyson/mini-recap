const changeTextBtn = document.getElementById("changeTextBtn");
const text = document.getElementById("text");


changeTextBtn.addEventListener("click", function (){
    text.innerText = "New Text!";
});