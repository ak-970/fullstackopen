const SearchCountries = ({ filter, handleFilterChange }) => 
    <form className="search-countries">
        <label htmlFor='country'>find countries</label>
        <input
            id='country'
            type="search"
            placeholder="type to search..."
            value={filter}
            onChange={handleFilterChange}
        />
    </form>

export default SearchCountries