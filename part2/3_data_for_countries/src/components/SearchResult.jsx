import CountryData from './CountryData'
import CountryList from './CountryList'

const SearchResult = ({ countries, filter, setFilter }) => {
    if (filter === '') {
        return <p>Please specify a filter.</p>
    } else if (countries.length > 10) {
        return <p>Too many matches, please set a more specific filter.</p>
    } else if (countries.length > 1) {
        return <CountryList countries={countries} setFilter={setFilter} />
    } else if (countries.length === 1) {
        return <CountryData country={countries[0]} />
    } else {
        return <p>No results. Please specify a different filter.</p>
    }
}

export default SearchResult