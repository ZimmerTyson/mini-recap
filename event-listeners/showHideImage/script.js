const toggleImageBtn = document.getElementById("toggleImageBtn");
const myImage = document.getElementById("myImage");

toggleImageBtn.addEventListener('click', function () {
    myImage.classList.toggle('hidden');
})