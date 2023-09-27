import { useState, useEffect } from 'react'

// services
import weatherService from '../services/weather'

const Weather = ({ location }) => {

    // use states
    const [waiting, setWaiting] = useState(true)
    const [temperature, setTemperature] = useState(0)
    const [wind, setWind] = useState(0)
    const [icon, setIcon] = useState('')

    // use effects
    useEffect(() => {
        weatherService
            .getWeather(location)
            .then(data => {
                setWaiting(false);
                setTemperature(roundOne(data.main.temp - 273.15))
                setWind(data.wind.speed)
                setIcon(`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
            })
    }, [])

    // data functions
    const roundOne = (number) => {
        return (Math.round(number * 10)/10)
    }

    return waiting ? <p>loading weather data...</p> :
        <div className='weather'>
            <div className='icon'>
                <img src={icon} />
            </div>
            <div className='infos'>
                <h4>Temperature</h4>
                <p>{temperature} °C</p>
                <h4>Wind</h4>
                <p>{wind} m/s</p>
            </div>
        </div>
}

export default Weather