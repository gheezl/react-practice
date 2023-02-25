import { Box,  Paper, Typography, Button } from "@mui/material";
import { ForeCastCardStyling } from "../styles";
import { formatEpochDate } from "../utility-functions";

const ForecastCard = ({day}: any) => {
    return (
        <Paper elevation={3} sx={ForeCastCardStyling}>
            <Typography>{formatEpochDate(day.date_epoch)}</Typography>
            <Box sx={{display: "flex", alignItems: "center", justifyContent: "center"}} >
                <img style={{height: "100px"}} src={day?.day.condition.icon} />
            </Box>
            <Button>
                <Typography>See more information</Typography>
            </Button>
        </Paper>
    )
}

export default ForecastCard;