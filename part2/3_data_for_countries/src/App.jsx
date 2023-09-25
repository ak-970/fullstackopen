import { useState, useEffect } from 'react'

// components
import SearchCountries from './components/SearchCountries'
import SearchResult from './components/SearchResult'

// services
import countryService from './services/countries'

const App = () => {

    // use states
    const [countries, setCountries] = useState([])
    const [filter, setFilter] = useState('')

    // use effects
    useEffect(() => {
        countryService
            .getAll()
            .then(allCountries => setCountries(allCountries))
    }, [])

    // event handlers
    const handleFilterChange = (event) => setFilter(event.target.value)
    
    // data functions
    const filteredCountries = countries.filter(c => c.name.common.toLowerCase().includes(filter.toLowerCase()))


    return (
        <div className='app'>

            <h1>Data for countries</h1>

            <SearchCountries
                filter={filter}
                handleFilterChange={handleFilterChange}
            />

            <SearchResult
                countries={filteredCountries}
                filter={filter}
                setFilter={setFilter}
            />


        </div>
    )

}

export default App