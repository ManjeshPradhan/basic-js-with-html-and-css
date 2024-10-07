const nextEl = document.querySelector(".next");
const prevEl = document.querySelector(".prev");
const imgEl = document.querySelector(".image_container")
const imgsEl = document.querySelectorAll("img")

let current = 1;

nextEl.addEventListener("click", ()=>{
    current++;
    update()
})

prevEl.addEventListener("click", ()=>{
    current--;
    update()
})

function update(){
    if(current > imgsEl.length){
        current = 1;
    }
    else if(current < 1){
        current = imgsEl.length;
    }
    imgEl.style.transform = `translateX(-${(current - 1) *500}px)`
}