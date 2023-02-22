import { Typography, Box } from "@mui/material";
import { useEffect } from "react";
import { useUserContext } from "../../contexts/UserContext";

import { HeaderBorder } from "./header-styles";


const Header = () => {
    const {user, setUser} = useUserContext();

    useEffect(() => {
        console.log(user, setUser)
    }, [user])

    return(
        <Box sx={HeaderBorder}>
            <Typography onClick={() => setUser("LOL HI")} variant="h3">Welcome to the weather app</Typography>
        </Box>
    )
}

export default Header;