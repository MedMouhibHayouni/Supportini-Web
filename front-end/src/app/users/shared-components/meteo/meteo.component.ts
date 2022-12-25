import {Component, OnInit} from '@angular/core';
import {GeoLocalisationService} from "../../../shared-service/geoLocalisationService/geo-localisation.service";

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.css']
})
export class MeteoComponent implements OnInit {

  WeatherData!: any;

  constructor(private geolocalisationservice: GeoLocalisationService) {
  }

  ngOnInit(): void {
    this.getLocation();
    this.WeatherData = {
      main: {},
      isDay: true
    };


  }

  getLocation() {
    this.geolocalisationservice.getLocationService().then(res => {
    this.getWeatherData(res.lng, res.lat);
    }).catch(err =>
      console.log(err))
  }
  getWeatherData(lng: number, lat: number) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=6ec9e04e85c0c9f0917e60845016303f`)
      .then(response => response.json())
      .then(data => {
        this.setWeatherData(data);
      })
    //    let data = JSON.parse('{"coord":{"lon":-0.85,"lat":52.5},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"base":"stations","main":{"temp":285.29,"feels_like":284.91,"temp_min":284.87,"temp_max":286.03,"pressure":1021,"humidity":90},"visibility":10000,"wind":{"speed":0.89,"deg":158,"gust":3.58},"clouds":{"all":59},"dt":1668349207,"sys":{"type":2,"id":2036206,"country":"GB","sunrise":1668324079,"sunset":1668356050},"timezone":0,"id":2643027,"name":"Market Harborough","cod":200}')
    // this.setWeatherData({data: data});
  }
  setWeatherData(data: any) {
    this.WeatherData = data;
    let sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
    this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    this.WeatherData['isDay'] = (currentDate.getTime() < sunsetTime.getTime());
    this.WeatherData.temp_celcius = (this.WeatherData.main.temp - 273.15).toFixed(0);
    this.WeatherData.temp_min = (this.WeatherData.main.temp_min - 273.15).toFixed(0);
    this.WeatherData.temp_max = (this.WeatherData.main.temp_max - 273.15).toFixed(0);
    this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like - 273.15).toFixed(0);
  }


}
