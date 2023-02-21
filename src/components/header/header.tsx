import {useContext, useEffect} from "react"

import { Typography, Box } from "@mui/material";
import { GlobalContext } from "../../contexts/GlobalContext";

import { HeaderBorder } from "./header-styles";


const Header = () => {
    // const {user, setUser} = useContext(GlobalContext)

    return(
        <Box sx={HeaderBorder}>
            <Typography variant="h3">Welcome to the weather app</Typography>
        </Box>
    )
}

export default Header;