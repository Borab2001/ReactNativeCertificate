const Units = {
    celsius: "°C",
    fahrenheit: "°F"
};

function convertTemperatureTo(temperature: number, unitTo: string) {
    if (unitTo === Units.celsius){
        return (temperature - 32) / 1.8;
    } else if (unitTo === Units.fahrenheit) {
        return temperature * 1.8 + 32;
    } else {
        throw new Error("Invalid unit");
    }
}

function oppositeUnit(unit: string) {
    return unit === Units.celsius ? Units.fahrenheit : Units.celsius;
}

export { Units, convertTemperatureTo, oppositeUnit }