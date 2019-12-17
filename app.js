const argv = require("./yargs_conf").argv;
const colors = require("colors");
const {getLugar} = require("./lugar/lugar");
const {getWeather} = require("./weather/weather");

const getInfo = (direccion) =>{
    return new Promise(async(resolve,reject)=>{
        let lugar;
        try{
            lugar = await getLugar(direccion);
        }
        catch(err){
            reject(colors.red(err));
        }
        let weather;
        try
        {
            weather = await getWeather(lugar.lat,lugar.lon);
        }
        catch(err){
            reject(colors.red("No se pudo encontrar el clima para esa ciudad"));
            return;
        }
        resolve("Temperature of " + colors.blue(direccion) + " is " + colors.green(weather)+"º".green);
    });
}


getInfo(argv.direccion)
.then((data)=>
{   
    console.log("\n==================WEATHER API====================\n".rainbow)
    console.log(data + "\n");
})
.catch(err => console.log(err));