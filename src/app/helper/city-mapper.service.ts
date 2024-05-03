import { City, CityView } from "../model";

export class CityMapperService {

    public modelToView(model: City, selectedDate: Date): CityView {
        const firstComaIndex = model.name.indexOf(',');
        const lastComaIndex = model.name.lastIndexOf(',');
        const temperature = model.weatherForecast.find(temperature => {
            const selectedDateOnly = selectedDate.toString().split('T')[0];
            const temperatureDateOnly = temperature.date.toString().split('T')[0];
            return selectedDateOnly === temperatureDateOnly;
        });
        const cityName = model.name.substring(0, firstComaIndex).trim();
        const countyName = model.name.substring(firstComaIndex + 1, lastComaIndex).trim();
        const countryName = model.name.substring(lastComaIndex + 1, model.name.length).trim();

        return {
            fullName: model.name,
            cityName,
            countyName,
            countryName,
            minTemp: temperature.minTemp,
            maxTemp: temperature.maxTemp,
            date: temperature.date
        }
    }
}