import { Typography, Box } from "@mui/material";
import { useGlobalContext } from "../../contexts/GlobalContext";

import { HeaderBorder } from "./header-styles";


const Header = () => {
    const {user} = useGlobalContext()

    return(
        <Box sx={HeaderBorder}>
            <Typography variant="h3">Welcome to the weather app</Typography>
        </Box>
    )
}

export default Header;