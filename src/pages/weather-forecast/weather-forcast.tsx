import { Box, Grid, LinearProgress, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { BASEURL, WeatherAPiHeaders, APIKEY } from "../../api-services/weather-api/config";
import { useUserContext } from "../../contexts/UserContext";
import {formatEpochDate, getTimeOfDay, determinePercentOfDay} from "./utility-functions"
import { PaperStyling, GridContainerStyling } from "./styles";

const WeatherForcast = () => {
    const [userLocation, setUserLocation] = useState("Delta ohio")
    const [weather, setWeather] = useState<any>()
    const [formatedCurrentDate, setFormatedCurrentDate] = useState<string>("")
    const [formatedCurrentTime, setFormatedCurrentTime] = useState<string>("")

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
                setFormatedCurrentTime(getTimeOfDay(data.location.localtime_epoch));
                setFormatedCurrentDate(formatEpochDate(data.location.localtime_epoch));
                setWeather(data);
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


    return (
      <Container maxWidth="xl">
        {/* displays the location and current weather */}
        <Grid container sx={GridContainerStyling} spacing={1}>
          <Grid item sm={12} md={6}>
            <Paper sx={PaperStyling} elevation={3}>
              <Typography variant="h5">{weather?.location.name}, {weather?.location.region}, {weather?.location.country}</Typography>
              <Typography>As of {formatedCurrentTime} on {formatedCurrentDate}</Typography> 
              <LinearProgress sx={{"borderRadius": "25px", "height": "5px"}} variant="determinate" value={determinePercentOfDay(weather?.location.localtime_epoch)} />
            </Paper>
          </Grid>
          <Grid item sm={12} md={6}>
            <Paper sx={PaperStyling} elevation={3}>
              <Grid container direction="row" justifyContent="space-around" >
                <Grid item md={6}>
                  <Typography variant="h2">{user?.usesMetric ? `${weather?.current.temp_c} C` : `${weather?.current.temp_f} F`}</Typography> 
                </Grid>
                <Grid item md={6}>
                  <Typography variant="h2">{weather?.current.condition.text}</Typography>
                </Grid>
                <Grid item md={6}>
                  <Typography>Feels like : {user?.usesMetric ? `${weather.current.feelslike_c} C` : `${weather?.current.feelslike_f} F`}</Typography>
                </Grid>
                <Grid item md={6}>
                  <Typography>Humidity : {weather?.current.humidity}</Typography>
                </Grid>
                <Grid item md={6}>
                  <Typography>Wind direction : {weather?.current.wind_dir}</Typography>
                </Grid>
                <Grid item md={6}>
                  <Typography>Wind speed : {user?.usesMetric ? `${weather?.current.wind_kph} KPH` : `${weather?.current.wind_mph} MPH`}</Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
        {/* displays the 7 day forcast */}
        <Box>
          <Typography variant="h4">7 day Forecast</Typography>
        </Box>
        <Grid container sx={GridContainerStyling} spacing={1}>
          {
            weather?.forecast.forecastday.map((day: any) => (
              <Grid key={day?.date} md={2} item>
                <Paper sx={PaperStyling}>
                  <Typography>{day?.date}</Typography>
                </Paper>
              </Grid>
            ))
          }
        </Grid>
        {/* displays the alerts  */}
        <Box>
          <Typography variant="h4">Alerts</Typography>
        </Box>
        <Grid container sx={GridContainerStyling} spacing={1}>
          {
            weather?.alerts.alert.map((alert: any) => (
              <Grid key={alert?.headline} md={2} item>
                <Paper sx={PaperStyling}>
                  <Typography>{alert?.headline}</Typography>
                </Paper>
              </Grid>
            ))
          }
        </Grid>
      </Container>
    )
}

export default WeatherForcast