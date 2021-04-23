function dijitalClock(){
    let dete = new Date();
    let hours = dete.getHours();
    let minit = dete.getMinutes();
    let secend = dete.getSeconds();
    let timeFormet = "AM";

    if(hours === 0){
        hours = 12;
    }
    if(hours > 12){
        hours = hours - 12;
        timeFormet = "PM"
    }
    hours = hours < 10 ? "0" + hours : hours;
    minit = minit < 10 ? "0" + minit : minit;
    secend = secend < 10 ? "0" + secend : secend;

    let finalTime = `${hours}:${minit}:${secend}`;
    document.getElementById("time").innerHTML = finalTime;
    document.querySelector("#smalle").innerHTML = timeFormet;
    setInterval(dijitalClock, 1000)
}

dijitalClock()