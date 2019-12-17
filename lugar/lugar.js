const axios = require("axios");
const getLugar = async(direccion) =>{
    let direccionURL = encodeURI(direccion);

    const instance = axios.create({
        baseURL : `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${direccionURL}`,
        headers: {"X-RapidAPI-Key":"849a8aee0emsh4baac56d48855e6p1e612ajsn003395b70c93"},
    });

    let resp = await instance.get();
    if(resp.data.Results.length == 0){
        throw new Error(`No hay resultados para la dirección ${direccion}`)
    }
    const data = resp.data.Results[0];
    const dir = data.name;
    const lat = data.lat;
    const lon = data.lon;

    return {dir,lat,lon};
}

module.exports = {
    getLugar
}