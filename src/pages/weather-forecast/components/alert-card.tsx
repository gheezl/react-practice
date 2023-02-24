import { Grid, Paper, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { PaperStyling } from "../styles";

const AlertCard = ({alert}: any) => {

    useEffect(() => {
        console.log(alert)
    }, [alert])

    return (
        <Grid key={alert?.headline} md={4} item>
            <Paper sx={PaperStyling} >
                <Stack spacing={2}>
                    {alert?.severity ? <Typography variant="h5" >{alert?.severity}</Typography> : null}
                    <Typography>{alert?.headline}</Typography>
                </Stack>
            </Paper>
        </Grid>
    )
}

export default AlertCard;