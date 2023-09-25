import axios from 'axios'

const baseUrl = 'http://api.openweathermap.org'
const apiKey = import.meta.env.VITE_OPENWEATHERMAP_KEY

const getWeather = (location) => {
    const request = axios.get(`${baseUrl}/data/2.5/weather?q=${location}&APPID=${apiKey}`)
    return request.then(response => response.data)
}

export default { getWeather }