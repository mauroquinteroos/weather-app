export class UI {
  constructor() {
    this.location = document.getElementById('weather-location')
    this.description = document.getElementById('weather-description')
    this.string = document.getElementById('weather-string')
    this.humidity = document.getElementById('weather-humidity')
    this.wind = document.getElementById('weather-wind')
  }

  render(data) {
    const {name, main: {temp, humidity}, sys: {country}, weather: [info], wind: {speed}} = data
    this.location.textContent = `${name} / ${country}`
    this.description.textContent = info.description
    this.string.textContent = `${temp} °C`
    this.humidity.textContent = `Humidity: ${humidity} %`
    this.wind.textContent = `Wind: ${speed} m/s`
  }
}