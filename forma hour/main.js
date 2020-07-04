function hour1(){
    var hourTag = document.getElementById("hour");
    var minute = 60;
    var HourInMinutes = hourTag.value * minute;
    var minuteTag = document.getElementById("minutes");
    minuteTag.innerText = HourInMinutes; 
    
}