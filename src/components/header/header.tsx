import { Typography, Box } from "@mui/material";

import { HeaderBorder } from "./header-styles";

const Header = () => {

    return(
        <Box sx={HeaderBorder}>
            <Typography variant="h3">Welcome to the weather app</Typography>
        </Box>
    )
}

export default Header;