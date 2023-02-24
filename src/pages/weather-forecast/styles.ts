import { determinePercentOfDay } from "./utility-functions"

export const PaperStyling = {
    "padding": "10px",
}

export const GridContainerStyling = {
"marginTop": "5px",
"marginBottom": "10px"
}

export const ArrowStyling = (localTime: any) => {
    return {
        marginLeft: determinePercentOfDay(localTime) / 1.35,
        display: "flex", 
        alignItems: "center", 
        width: "100px"
    }
  }