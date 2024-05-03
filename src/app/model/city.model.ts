import { Temperature } from "./temperature.model";

export interface City {
    name: string;
    lon: number;
    lat: number;
    weatherForecast: Temperature[];
}