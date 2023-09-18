import { useState } from 'react'

import FilterNumbers from './components/FilterNumbers'
import AddNumber from './components/AddNumber'
import NumberList from './components/NumberList'

const App = () => {

    const [persons, setPersons] = useState([
        // { name: 'Arto Hellas', number: '040-123456', id: 1 },
        // { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
        // { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
        // { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
    ]) 
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')

    
    const handleNameChange = (event) => setNewName(event.target.value)    
    const handleNumberChange = (event) => setNewNumber(event.target.value)    
    const handleFilterChange = (event) => setFilter(event.target.value)

    
    const nameAlreadyExists = (name) => persons.find(p => name === p.name) !== undefined


    const addPerson = (event) => {
        event.preventDefault()
        if (nameAlreadyExists(newName)) {
            window.alert(`${newName} is already added to the phonebook.`)
        } else {
            const newPerson = {
                id : persons.length + 1,
                name : newName,
                number : newNumber
            }          
            setPersons(persons.concat(newPerson))
            setNewName('')
            setNewNumber('')
        }
    }


    const filteredPersons = persons.filter(p => p.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) || p.number.includes(filter))


    return (
        <div>

            <h1>Phonebook</h1>

            <h2>Filter numbers</h2>
            <FilterNumbers
                filter={filter}
                handleFilterChange={handleFilterChange}
            />

            <h2>Add a new number</h2>
            <AddNumber
                handleSubmit={addPerson}
                newName={newName}
                handleNameChange={handleNameChange}
                newNumber={newNumber}
                handleNumberChange={handleNumberChange}
            />

            <h2>Numbers</h2>
            <NumberList persons={filteredPersons} />

        </div>
    )
}

export default App