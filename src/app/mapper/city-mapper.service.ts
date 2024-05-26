import { Injectable } from "@angular/core";
import { City, CityView } from "../model";
import { Temperature } from "../model/temperature.model";

@Injectable({
    providedIn: 'root'
})
export class CityMapperService {

    public modelToView(model: City, selectedDate: Date): CityView {
        if(!model || !selectedDate) {
            return null;
        }

        const { minTemp, maxTemp, date } = this.getTemperatureByDay(model.weatherForecast, selectedDate);
        const { cityName, countryName, countyName } = this.getCityNameDetails(model);

        return {
            fullName: model.name,
            cityName,
            countyName,
            countryName,
            minTemp,
            maxTemp,
            date,
            lat: model.lat,
            lon: model.lon
        }
    }

    public viewToModel(view: CityView): City {
        if(!view) {
            return null;
        }
        return {
            name: view.fullName,
            lat: view.lat,
            lon: view.lon,
            weatherForecast: [{minTemp: view.minTemp, maxTemp: view.maxTemp, date: view.date}]
        }
    }

    private getCityNameDetails(model: City): {cityName: string, countryName: string, countyName: string} {
        const firstComaIndex = model.name.indexOf(',');
        const lastComaIndex = model.name.lastIndexOf(',');
        const cityName = model.name.substring(0, firstComaIndex).trim();
        const countyRaw = model.name.substring(firstComaIndex + 1, lastComaIndex).trim()
            .split(',')
            .map(element => {
                const arr = element.replace(/[^a-zA-Z\s]*$/g, '').trim().split(' ');
                return arr
                    .map( item => item.charAt(0).toUpperCase() + item.slice(1) )
                    .join(' ');
            })
            .filter(Boolean);

        const countyName = countyRaw[countyRaw.length - 1];
        const countryName = model.name.substring(lastComaIndex + 1, model.name.length).trim();

        return { cityName, countryName, countyName }
    }

    private getTemperatureByDay(temperatures: Temperature[], selectedDate: Date): Temperature{
        return temperatures.find(temperature => {
            const selectedDateOnly = selectedDate.toString().split('T')[0];
            const temperatureDateOnly = temperature.date.toString().split('T')[0];
            return selectedDateOnly === temperatureDateOnly;
        });
    }
}