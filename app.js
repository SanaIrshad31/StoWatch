var sec=0;
var min=0;
var hour=0;

var displaySec =0;
var displayMin =0;
var displayHour =0;

var interval =null;

var status = "stopped";


function stopWatch(){
    sec++;
    if(sec / 60 == 1){
        sec=0;
        min++;

        if(min / 60 == 1){
            min=60;
            hour++;
        }
    }

    if(sec < 10){
        displaySec = "0" + sec.toString()
    }
    else{
        displaySec = sec;
    }

    if(min < 10){
        displayMin = "0" + min.toString()
    }
    else{
        displayMin = min;
    }

    if(hour < 10){
        displayHour = "0" + hour.toString()
    }
    else{
        displayHour = hour;
    }
    document.getElementById("display").innerHTML = displayHour + ":" + displayMin + ":" + displaySec;

}


function startstop(){
    if(status == "stopped"){
        interval = window.setInterval(stopWatch, 10);
        document.getElementById("startstop").innerHTML = "stop";
        status = "started";
    }
    else{
        window.clearInterval(interval);
        document.getElementById("startstop").innerHTML = "start";
        status = "stopped"
    }
}


function reset(){
    window.clearInterval(interval);
    sec =0;
    min =0;
    hour =0;
    document.getElementById("display").innerHTML = "00:00:00";
    document.getElementById("statstop").innerHTML = "start"
}
