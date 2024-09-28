const hourEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function updateClock(){
 let h = new Date().getHours()
 let m = new Date().getMinutes()
 let s = new Date().getSeconds()
 let ampm = "AM"

if(h > 12){
    h = h - 12;
    ampm="PM"
}
if(h <= 9)
{
    h = "0" + h;
}
if(m <= 9)
{
    m = "0" + m;
}
if(s <= 9)
{
    s = "0" + s;
}
    hourEl.innerText = h;
    minutesEl.innerText = m;
    secondEl.innerText = s;
    ampmEl.innerText = ampm;
    setTimeout(()=>{
        updateClock()
    }, 1000)
}

updateClock()