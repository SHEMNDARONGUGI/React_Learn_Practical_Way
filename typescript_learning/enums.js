"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WeatherConditions;
(function (WeatherConditions) {
    WeatherConditions["Sunny"] = "sunny";
    WeatherConditions["Cloudy"] = "cloudy";
    WeatherConditions["Rainy"] = "rainy";
})(WeatherConditions || (WeatherConditions = {}));
const currentWeather = WeatherConditions.Cloudy;
console.log(`The current weather is ${currentWeather}`);
//# sourceMappingURL=enums.js.map