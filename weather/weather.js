const axios = require("axios");

const getWeather = async(lat,lon) => {
    let instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a26e7d74fb2d951c3f3f29f354c47a1a&units=metric`
    });
    let resp = await instance.get();
    return resp.data.main.temp;
}

module.exports = {
    getWeather
}