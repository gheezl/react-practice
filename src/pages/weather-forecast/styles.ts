import { determinePercentOfDay } from "./utility-functions"

export const PaperStyling = {
    "padding": "10px",
}

export const ForeCastCardStyling = {
    padding: "10px", 
    margin: "5px",
    minWidth: "100px"
}

export const GridContainerStyling = {
    "marginTop": "5px",
    "marginBottom": "10px"
}

export const ArrowStyling = (localTime: any) => {
    return {
        marginLeft: `${determinePercentOfDay(localTime) - 7.25}%`,
        display: "flex", 
        alignItems: "center", 
        width: "100px",
    }
  }