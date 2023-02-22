import { useEffect, useState } from "react"
import { BASEURL, WeatherAPiHeaders, APIKEY } from "../../api-services/weather-api/config"

const WeatherForcast = () => {
    const [userLocation, setUserLocation] = useState("Delta, Ohio")

    useEffect(() => {
        getCurrentWeather()
    }, [])

    const getCurrentWeather = async () => {
        try {
            const response = await fetch(`${BASEURL}/current.json?key=${APIKEY}&q=${userLocation}&aqi=yes`, {
              method: 'GET',
              headers: WeatherAPiHeaders
            });
        
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
        
            const data = await response.json();
            console.log(data);
          } catch (error) {
            console.error('Error:', error);
          }
    }

    return (
        <div>
            <h2>lol hi</h2>
        </div>
    )
}

export default WeatherForcast