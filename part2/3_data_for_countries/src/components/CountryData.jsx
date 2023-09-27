import LanguageList from './LanguageList'
import Weather from './Weather'

const CountryData = ({ country }) =>
    <div>
        <h2>{country.name.common}</h2>
        <h3>capital</h3>
        <p>{country.capital}</p>
        <h3>area</h3>
        <p>{country.area} km²</p>
        <h3>languages</h3>
        <LanguageList languages={Object.entries(country.languages)} />
        <h3>flag</h3>
        <img className="flag" src={country.flags.svg} alt={country.flags.alt} />
        <h3>Weather in {country.capital}</h3>
        <Weather location={country.capital} />
    </div>

export default CountryData