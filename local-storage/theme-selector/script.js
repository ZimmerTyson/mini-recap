function setTheme(theme) {
  localStorage.setItem("theme", "theme");
  document.body.style.background = theme === "dark" ? "#333" : "#fff"; 
  document.body.style.color = theme === "dark" ? "#fff" : "#000";

}



const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  setTheme(savedTheme);
}