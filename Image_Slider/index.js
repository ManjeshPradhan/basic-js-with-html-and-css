const nextEl = document.querySelector(".next");
const prevEl = document.querySelector(".prev");
const imgEl = document.querySelector(".image_container")
const imgsEl = document.querySelectorAll("img")

let current = 1;

let timeout;

nextEl.addEventListener("click", ()=>{
    current++;
    clearTimeout(timeout);
    update()
})

prevEl.addEventListener("click", ()=>{
    current--;
    clearTimeout(timeout);
    update()
})

update()

function update(){
    if(current > imgsEl.length){
        current = 1;
    }
    else if(current < 1){
        current = imgsEl.length;
    }
    imgEl.style.transform = `translateX(-${(current - 1) *500}px)`

    timeout = setTimeout(() => {
        current++;
        update()
    },3000)
}