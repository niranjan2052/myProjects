/* Providing Date on to the Page */
const curDate = document.getElementById("date");
let weathercon = document.getElementById("weathercon");

const tempStatus = 'Clouds';

let currentTime = new Date();

const getCurrentDay = ()=> {

    var weekDay = new Array(7);
    weekDay[0] = "SUN";
    weekDay[1] = "MON";
    weekDay[2] = "TUE";
    weekDay[3] = "WED";
    weekDay[4] = "THR";
    weekDay[5] = "FRI";
    weekDay[6] = "SAT";

    let day = currentTime.getDay();
    return weekDay[day];
}

const getCurrentTime = () => {
    var months = new Array(12);
    var months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ];

    let date = currentTime.getDate();
    let month = currentTime.getMonth();

    let hour = currentTime.getHours();
    let min = currentTime.getMinutes();

    let perios = hour>11?"PM":"AM";
    hour = hour>11?hour-12:hour;
    hour = hour == 0 ?12:hour;
    if(min<10)
        min="0"+min;
    
    return `${months[month]} ${date} | ${hour}:${min} ${perios}`;
}

curDate.innerHTML = getCurrentDay() + " | " + getCurrentTime();


//***************************************** */