function start() {
    var now = new Date();
    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();
    var day = now.getDay();
    var d = now.getDate();
    var month= now.getMonth();
    var y = now.getFullYear();
    m = correct(m);
    s = correct(s);
    month =month+1;
    switch (day){
        
            case 0:
                day = "Sunday";
                break;
            case 1:
                day = "Monday";
                break;
            case 2:
                day = "Tuesday";
                break;
            case 3:
                day = "Wednesday";
                break;
            case 4:
                day = "Thursday";
                break;
            case 5:
                day = "Friday";
                break;
            case 6:
                day = "Saturday";
                break;
           }
    document.getElementById('clock').innerHTML = h + ":" + m + ":" + s;
    document.getElementById("clock2").innerHTML= day+", "+d+ "-" + month + "-" + y;

    
    var t = setTimeout(start, 1000);
}
function correct(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
