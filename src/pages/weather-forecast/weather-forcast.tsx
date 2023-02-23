import { Grid, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { BASEURL, WeatherAPiHeaders, APIKEY } from "../../api-services/weather-api/config";
import { useUserContext } from "../../contexts/UserContext";

const WeatherForcast = () => {
    const [userLocation, setUserLocation] = useState("Delta")
    const [weather, setWeather] = useState<any>()

    const {user} = useUserContext()

    useEffect(() => {
        let mounted = true;

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
              if (mounted) {
                setWeather(data)
              }
            } catch (error) {
              console.error('Error:', error);
            }
      }

      getWeatherForcast()

      return () => {
        mounted = false
      }
    }, [])

    const PaperStyling = {
      "padding": "10px",
    }

    const GridContainerStyling = {
      "marginTop": "10px"
    }

    return (
      <Container maxWidth="xl">
        <Grid container sx={GridContainerStyling} spacing={1}>
          <Grid item sm={12} md={6}>
            <Paper sx={PaperStyling} elevation={3}>
              <Typography >{weather?.location.name}, {weather?.location.region}, {weather?.location.country}</Typography> 
            </Paper>
          </Grid>
          <Grid item sm={12} md={6}>
            <Paper sx={PaperStyling} elevation={3}>{user?.usesMetric ? `${weather?.current.temp_c} C` : `${weather?.current.temp_f} F`}</Paper>
          </Grid>
        </Grid>
        <Grid container sx={GridContainerStyling} spacing={1}>
          {weather?.forecast.forecastday.map((day: any) => (
            <Grid md={1.7142857143} item>
              <Paper sx={PaperStyling}>
                <Typography>{day?.date}</Typography>
              </Paper>
            </Grid>
          ))}
          
        </Grid>
      </Container>
    )
}

export default WeatherForcast