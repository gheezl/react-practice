import { Card, CardActions, CardContent, CardHeader, CardMedia, Grid, Paper, Typography, Box } from "@mui/material";
import { useState } from "react";
import { formatEpochDate } from "../utility-functions";

const ForecastCard = ({day}: any) => {
    const [seeMore, setSeeMore] = useState<boolean>(false)

    return (
        <Grid key={day?.date} md={2} item>
            <Card >
                <CardHeader
                    title={formatEpochDate(day.date_epoch)}
                />
                <CardContent >
                    <Typography variant="h6">{day?.day.condition.text}</Typography>
                </CardContent>
                <CardMedia
                    component="img"
                    image={day?.day.condition.icon}
                />
                <CardActions>
                    <Typography onClick={() => setSeeMore(!seeMore)} >See more information</Typography>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default ForecastCard;