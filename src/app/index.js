import '../styles.css'

import {Weather} from './Weather'
import {UI} from './UI'
import {Store} from './Store'

const ui = new UI()
const store = new Store()
const {city, countryCode} = store.getLocationData()
const weather = new Weather(city, countryCode)

const fetchWeather = async () => {
  const data = await weather.getWeather()
  ui.render(data)
}

const $form = document.querySelector('#weather-form')

$form.addEventListener('submit', (ev) => {
  const formData = new FormData($form)
  $form.reset()
  const city = formData.get('city')
  const countryCode = formData.get('country-code')
  weather.updateLocation(city, countryCode)
  fetchWeather()
  store.setLocationData(city, countryCode)

  ev.preventDefault()
})

fetchWeather()