import { useState, useEffect } from 'react'
import axios from 'axios'

import FilterNumbers from './components/FilterNumbers'
import AddNumber from './components/AddNumber'
import NumberList from './components/NumberList'
import Notification from './components/Notification'

import personService from './services/persons'

const App = () => {

    const [persons, setPersons] = useState([]) 
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')
    const [notification, setNotification] = useState({ message : null, type : ''})

    useEffect(() => {
        personService
            .getAll()
            .then(initialPersons => {
                setPersons(initialPersons)
            })
    }, [])

    
    const handleNameChange = (event) => setNewName(event.target.value)    
    const handleNumberChange = (event) => setNewNumber(event.target.value)    
    const handleFilterChange = (event) => setFilter(event.target.value)

    
    const nameAlreadyExists = (name) => persons.find(p => name === p.name) !== undefined


    const addPerson = (event) => {

        event.preventDefault()

        if (nameAlreadyExists(newName)) {

            const message = `${newName} is already added to the phonebook, do you want to replace the old number with the new one?`
            
            if (window.confirm(message)) {

                const person = persons.find(p => p.name === newName)
                const changedPerson = { ...person, number : newNumber }

                personService
                    .update(person.id, changedPerson)
                    .then(returnedPerson => {
                        setPersons(persons.map(p => p.id !== person.id ? p : returnedPerson))
                        setNotification({
                            message : `Number was successfully updated for ${newName}`,
                            type : 'success'
                        })
                        setTimeout(() => {
                            setNotification({...notification, message : null})
                        }, 5000)
                        setNewName('')
                        setNewNumber('')
                    })
                    .catch(error => {
                        setNotification({
                            message : `${newName} was already deleted from the server.`,
                            type : 'error'
                        })
                        setTimeout(() => {
                            setNotification({...notification, message : null})
                        }, 5000)
                        setPersons(persons.filter(p => p.id !== person.id))
                    })

            }

        } else {
            const personObject = {
                name : newName,
                number : newNumber
            }

            personService
                .create(personObject)
                .then(returnedPerson => {
                    setPersons(persons.concat(returnedPerson))
                    setNotification({
                        message : `Added ${newName}`,
                        type : 'success'
                    })
                    setTimeout(() => {
                        setNotification({...notification, message : null})
                    }, 5000)
                    setNewName('')
                    setNewNumber('')
                })
        }
    }

    
    const deletePerson = (id) => {
        const deleteName = persons.filter(p => p.id === id)[0].name
        if (window.confirm(`Do you really want to delete ${deleteName}?`)) {
            personService
                .remove(id)
                .then(response => {
                    if (response.status === 200) {
                        setNotification({
                            message : `Deleted ${deleteName}`,
                            type : 'success'
                        })
                        setTimeout(() => {
                            setNotification({...notification, message : null})
                        }, 5000)
                        setPersons(persons.reduce((a, b) => ((b.id === id) ? a : a.concat(b)), []))
                    }
                })
        }
    }


    const filteredPersons = persons.filter(p => p.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) || p.number.includes(filter))


    return (
        <div>

            <h1>Phonebook</h1>
            
            <Notification message={notification.message} type={notification.type} />

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
            <NumberList
                persons={filteredPersons}
                handleDelete={deletePerson}
            />

        </div>
    )
}

export default App