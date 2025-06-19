const boxes = document.getElementsByClassName("box");
const hideBtn = document.getElementById("hideBtn");

hideBtn.addEventListener("click", function () {
    for (let box of boxes) {
        box.style.display = "none";
    }
});