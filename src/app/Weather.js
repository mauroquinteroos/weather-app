export class Weather {
  constructor(city, countryCode) {
    this.key = "71a74c92fc42cbe708e875d5246e9084"
    this.city = city
    this.countryCode = countryCode
  }

  async getWeather() {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.key}&units=metric`
    const response = await fetch(
      URL)
    const data = await response.json()
    return data
  }

  updateLocation(city, countryCode) {
    this.city = city
    this.countryCode = countryCode
  }
}