export const APIKEY = "82c1f89cca3d4796b00194851232102";
export const BASEURL = 'http://api.weatherapi.com/v1'

export const WeatherAPiHeaders = new Headers({
    "Content-Type": "application/json",
    "Authorization": `Bearer ${APIKEY}`
})