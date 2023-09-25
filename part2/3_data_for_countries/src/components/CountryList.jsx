const CountryList = ({ countries, setFilter }) => 
    <ul>
        {countries.map(country =>
            <li key={country.flag}>
                {country.name.common}
                <button onClick={() => setFilter(country.name.common)}>show</button>
            </li>
        )}
    </ul>

export default CountryList