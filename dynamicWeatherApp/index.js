/* Node JS and API */

const http = require("http");
const fs = require("fs");
var requests = require("requests");

const homeFile = fs.readFileSync("home.html", "utf8");

const replaceVal = (tempVal, orgVal)=>{
    let kelvinVal = 273.15;
    let temperature = tempVal.replace("{%tempval%}",Math.round(orgVal.main.temp-kelvinVal));
    temperature = temperature.replace("{%tempmin%}",Math.round(orgVal.main.temp_min-kelvinVal));
    temperature = temperature.replace("{%tempmax%}",Math.round(orgVal.main.temp_max-kelvinVal));
    temperature = temperature.replace("{%city%}",orgVal.name);
    temperature = temperature.replace("{%country%}",orgVal.sys.country);
    temperature = temperature.replace("{%tempstatus%}",orgVal.weather[0].main);

    return temperature;

}

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        requests("http://api.openweathermap.org/data/2.5/weather?q=Bengaluru&appid=2be58554eb05ba24fb1975449dfe7af4")
            .on("data", (chunk) => {

                const objData = JSON.parse(chunk);
                const arrData = [objData];
                // console.log(arrData[0].main.temp);

                const realTimeData = arrData.map(val=>replaceVal(homeFile,val)).join();
                res.write(realTimeData);
            })
            .on("end", (err) => {
                if (err)
                    return console.log("Conection closed!!")
                res.end();
            });
    }
});

server.listen("3000", "127.0.0.1", () => {
    console.log("Listining to port 3000")
})

/* **************************************** */