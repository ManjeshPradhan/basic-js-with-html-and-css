const btnEl = document.querySelector(".btn")
const containerEl = document.querySelector(".container");
const popupEl = document.querySelector(".popup")
const closeEl = document.querySelector(".close_icon")

btnEl.addEventListener("click", () => {
containerEl.classList.add("active");
popupEl.classList.remove("active");
})

closeEl.addEventListener("click", () =>{
    popupEl.classList.add("active");
    containerEl.classList.remove("active");
})