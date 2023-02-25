import { determinePercentOfDay } from "./utility-functions"

export const GridContainerStyling = {
    marginTop: "5px",
    marginBottom: "10px"
}

export const PaperStyling = {
    padding: "10px",
}

export const ForecastCardStyling = {
    padding: "10px", 
    margin: "5px",
    minWidth: "100px"
}

export const ForecastScrollBorder = {
    display: "flex", 
    overflow: "scroll"
}

export const ForecastCardImage = {
    display: "flex", 
    alignItems: "center", 
    justifyContent: "center"
}

export const ArrowStyling = (localTime: any) => {
    return {
        marginLeft: `${determinePercentOfDay(localTime) - 7.25}%`,
        display: "flex", 
        alignItems: "center", 
        width: "100px",
    }
}
