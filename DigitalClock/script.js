const hourE1 = document.getElementById("hour");
const minuteE1 = document.getElementById("minutes") ;
const secondsE1 = document.getElementById("seconds");
const ampm1 = document.getElementById("ampm");


function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "Am"

    if(h > 12){
        h = h-12
        ampm = "pm"
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;


    hourE1.innerHTML = h;
    minuteE1.innerHTML = m;
    secondsE1.innerHTML= s;
    ampm1.innerHTML = ampm;

setTimeout(()=> {
    updateClock()
}, 1000)



}
updateClock()
