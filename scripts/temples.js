const hamButton = document.getElementById("menu");
const navigation = document.getElementById("navigation");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
})