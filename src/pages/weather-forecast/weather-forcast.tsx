import { Grid, Paper } from "@mui/material"
import { useEffect, useState } from "react"
import { BASEURL, WeatherAPiHeaders, APIKEY } from "../../api-services/weather-api/config"

const WeatherForcast = () => {
    const [userLocation, setUserLocation] = useState("Delta, Ohio")

    useEffect(() => {
        getWeatherForcast()
    }, [])

    const getWeatherForcast = async () => {
        try {
            const response = await fetch(`${BASEURL}/forecast.json?key=${APIKEY}&q=${userLocation}&days=7&aqi=yes&alerts=yes`, {
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
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Paper elevation={3}>1</Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper elevation={3}>2</Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper elevation={3}>3</Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper elevation={3}>4</Paper>
          </Grid>
        </Grid>
    )
}

export default WeatherForcast