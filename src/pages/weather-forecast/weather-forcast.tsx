import { Box, Grid, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { BASEURL, WeatherAPiHeaders, APIKEY } from "../../api-services/weather-api/config";
import { useUserContext } from "../../contexts/UserContext";

const WeatherForcast = () => {
    const [userLocation, setUserLocation] = useState("Delta, Ohio")
    const [weather, setWeather] = useState<any>()
    const [formatedCurrentDate, setFormatedCurrentDate] = useState<string>("")
    const [formatedCurrentTIme, setFormatedCurrentTime] = useState<string>("")

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

    // utility functions
    const formatEpochDate = (epochTime: number) => {
      const date = new Date(epochTime * 1000);
      return date.toLocaleDateString()
    }

    const getTimeOfDay = (epochTime: number) => {
      const date = new Date(epochTime * 1000);
      let hours = date.getHours();
      let minutes = date.getMinutes().toString();

      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12;

      if (minutes.length < 2) {
        minutes = "0" + minutes;
      }

      return hours + ':' + minutes + ' ' + ampm;
    }

    // styles
    const PaperStyling = {
      "padding": "10px",
    }

    const GridContainerStyling = {
      "marginTop": "5px",
      "marginBottom": "10px"
    }

    return (
      <Container maxWidth="xl">
        {/* displays the location and current weather */}
        <Grid container sx={GridContainerStyling} spacing={1}>
          <Grid item sm={12} md={6}>
            <Paper sx={PaperStyling} elevation={3}>
              <Typography variant="h5">{weather?.location.name}, {weather?.location.region}, {weather?.location.country}</Typography>
              <Typography>As of {formatedCurrentTIme} on {formatedCurrentDate}</Typography> 
            </Paper>
          </Grid>
          <Grid item sm={12} md={6}>
            <Paper sx={PaperStyling} elevation={3}>
              <Grid container>
                <Typography variant="h2">{weather?.current.condition.text}</Typography>
                <Typography variant="h2">{user?.usesMetric ? `${weather?.current.temp_c} C` : `${weather?.current.temp_f} F`}</Typography> 
              </Grid>
              {/* <Typography variant="h3">Feels like {user?.usesMetric ? `${weather?.current.feelslike_c} C` : `${weather?.current.feelslike_f} F`}</Typography>  */}
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