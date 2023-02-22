import { Typography, Box } from "@mui/material";
import { HeaderBorder } from "./header-styles";
import { useUserContext } from "../../contexts/UserContext";

const Header = () => {
    const {user} = useUserContext()

    return(
        <Box sx={HeaderBorder}>
            <Typography  variant="h3">Welcome {user?.name} to the weather app</Typography>
        </Box>
    )
}

export default Header;