import _, { get_data, successCallback } from './weatherData'

const status_E = document.querySelector('#status');
const temp_E = document.querySelector('#temp');
const wind_E = document.querySelector('#wind');
const pressure_E = document.querySelector('#pressure');
const body = document.getElementsByTagName('body');
const city_E = document.querySelector('#cityLabel');
get_data();
export{
    status_E , temp_E , wind_E , pressure_E , body , city_E
};