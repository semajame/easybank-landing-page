
const burger = document.querySelector("#burger");

const nav = document.getElementById("ul")
const body = document.getElementById("body");

burger.addEventListener("click", ()=>{
    nav.classList.toggle("active");
    body.classList.toggle("active");
})