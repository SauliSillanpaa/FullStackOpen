import { useState, useEffect } from 'react'
import axios from 'axios'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [findName, setFindName] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  
  console.log('render', persons.length, 'persons')

  const addPerson = (event) => {
    event.preventDefault()

    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      const personObject = {
        name: newName,
        number: newNumber
      }

      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
      console.log('button clicked', event.target)
    }
  }

  const handleNameChange = (event) => {
    console.log('Event name change', event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log('Event number change', event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFindNameChange = (event) => {
    console.log('Event find number change', event.target.value)
    setFindName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
        <Filter
          findName={findName}
          handleFindNameChange={handleFindNameChange}
        />
      <h3>Add a new</h3>
        <PersonForm
          addPerson={addPerson}
          newName={newName}
          handleNameChange={handleNameChange}
          newNumber={newNumber}
          handleNumberChange={handleNumberChange}
        />
      <h3>Numbers</h3>
        <Persons
          persons={persons}
          findName={findName}
          handleFindNameChange={handleFindNameChange}
        />
    </div>
  )
}

export default App