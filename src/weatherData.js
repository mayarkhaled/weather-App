import _, { status_E, temp_E, wind_E, pressure_E, body, city_E } from './index.js'

const API_KEY = "ecac6354ce839658c06348ed783f39c8";
 let weather = {};

function weatherObj(main , description , temp , pressure , wind , countryName){
    return {main , description , temp , pressure , wind , countryName };
}

async function get_weather(results){ 
    const latitude = results.coords.latitude;
    const longitude  = results.coords.longitude;  
      
    let weatherData = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`,
        {mode: 'cors'} ); 
                  
    weatherData = await (weatherData.json());

    weather = weatherObj(weatherData.weather[0].main,
                weatherData.weather[0].description,
                convertTemp(weatherData.main.temp),
                weatherData.main.pressure,
                weatherData.wind.speed,
                weatherData.name);
}

export function get_data(){
    if(window.navigator.geolocation){
        window.navigator.geolocation.getCurrentPosition(successCallback, console.log);
     }  
}

 const successCallback = async results => {
    await get_weather(results);
    setDOM();
}

function convertTemp(temp){
    return temp - 273.15;
}

function setDOM(){
    console.log("d");
    status_E.innerHTML = weather.description;
    temp_E.innerHTML = Math.floor(weather.temp) + ' C';
    wind_E.innerHTML = weather.wind;
    pressure_E.innerHTML = weather.pressure;
    city_E.innerHTML = weather.countryName;
   
    document.body.style.background = `url(${weather.main}.jpg)` ;
    
}
