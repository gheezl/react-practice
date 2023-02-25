import { useEffect, useState } from "react";
// MUI imports
import { Box, CircularProgress, Container, Grid, LinearProgress, Paper, Stack, Typography } from "@mui/material";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// API info imports
import { BASEURL, WeatherAPiHeaders, APIKEY } from "../../api-services/weather-api/config";
// context info imports
import { useUserContext } from "../../contexts/UserContext";
// abstracted information imports
import {formatEpochDate, getTimeOfDay, determinePercentOfDay} from "./utility-functions"
import { PaperStyling, GridContainerStyling, ArrowStyling } from "./styles";
// component imports
import ForecastCard from "./components/forecast-card";
import AlertCard from "./components/alert-card";

const WeatherForcast = () => {
    const [userLocation, setUserLocation] = useState("Los Angeles")
    const [weather, setWeather] = useState<any>(null)

    const {user} = useUserContext();

    useEffect(() => {
        let mounted = true;

        const getWeatherForcast = async () => {
          try {
            const response = await fetch(`${BASEURL}/forecast.json?key=${APIKEY}&q=${userLocation}&days=10&aqi=yes&alerts=yes`, {
              method: 'GET',
              headers: WeatherAPiHeaders
            });
        
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
        
            const data = await response.json();
            console.log(data);
            if (mounted) {
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
      <Box >
        <Container maxWidth="xl" >
          {
            weather
            ? (
              <>
                <Grid container sx={GridContainerStyling} spacing={1}>
                  {/* displays the location information */}
                  <Grid item sm={12} md={6}>
                    <Paper sx={PaperStyling} elevation={3}>
                      <Typography variant="h5">{weather?.location.name}, {weather?.location.region}, {weather?.location.country}</Typography>
                      <Typography>{formatEpochDate(weather?.location.localtime_epoch)}</Typography> 
                      <LinearProgress sx={{"borderRadius": "25px", "height": "5px", marginTop: "10px"}} variant="determinate" value={determinePercentOfDay(weather?.location.localtime_epoch)} />
                      <Stack sx={ArrowStyling(weather?.location.localtime_epoch)}>
                        <KeyboardArrowUpIcon />
                        <Typography >{getTimeOfDay(weather?.location.localtime_epoch)}</Typography>
                      </Stack>
                      <Box sx={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                        <img style={{height: "200px"}} src={weather?.current.condition.icon} />
                      </Box>
                    </Paper>
                  </Grid>
                  {/* displays the current weather */}
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
                          <Typography>Feels like {user?.usesMetric ? `${weather?.current.feelslike_c} C` : `${weather?.current.feelslike_f} F`}</Typography>
                        </Grid>
                        <Grid item md={6}>
                          <Typography>Wind speed of {user?.usesMetric ? `${weather?.current.wind_kph} KPH` : `${weather?.current.wind_mph} MPH`}</Typography>
                        </Grid>
                        <Grid item md={6}>
                          <Typography>Humidity is at {weather?.current.humidity}</Typography>
                        </Grid>
                        <Grid item md={6}>
                          <Typography>Wind direction from {weather?.current.wind_dir}</Typography>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                </Grid>
                {/* displays our 10 day forecast */}
                <Box>
                  <Typography variant="h4">10 day Forecast</Typography>
                </Box>
                <Box sx={{display: "flex", overflow: "scroll"}}>
                  {
                    weather?.forecast.forecastday.map((day: any) => (
                      <ForecastCard day={day} />
                    ))
                  }
                </Box>
                {/* displays the alerts  */}
                <Box>
                  <Typography variant="h4">Alerts</Typography>
                </Box>
                <Grid container sx={GridContainerStyling} spacing={1}>
                  {
                    weather?.alerts.alert.map((alert: any) => (
                      <AlertCard alert={alert} />
                    ))
                  }
                </Grid>
              </>
            )
            : (
              <Box sx={{width: "100%", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid black"}}>
                <CircularProgress />
              </Box>
            )
          }
        </Container>
      </Box>
      
    )
}

export default WeatherForcast