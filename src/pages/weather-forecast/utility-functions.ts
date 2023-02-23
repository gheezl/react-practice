export const formatEpochDate = (epochTime: number): string => {
    const date = new Date(epochTime * 1000);
    return date.toLocaleDateString()
}

export const getTimeOfDay = (epochTime: number): string => {
    const date = new Date(epochTime * 1000);
    let hours = date.getHours();
    let minutes = date.getMinutes().toString();

    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;

    if (minutes.length < 2) {
        minutes = "0" + minutes;
    }

    return hours + ':' + minutes + ' ' + ampm;
}

export const determinePercentOfDay = (epochTime: number): number => {
    const date = new Date(epochTime * 1000);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    
    console.log(hours, minutes)

    const percent = (hours / 24) * 100;
    console.log(percent)
    return percent;
}