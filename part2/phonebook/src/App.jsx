import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Notification from './components/Notification'
import personService from './services/persons'

let isError = false

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [findName, setFindName] = useState('')
  const [notification, setNotification] = useState('')

  useEffect(() => {
    console.log('effect')
    personService
      .getAll()
      .then(initialPersons => {
        console.log('promise fulfilled')
        setPersons(initialPersons)
      })
  }, [])

  console.log('render', persons.length, 'persons')

  const updateNumber = () => {
    const person = persons.find( p => p.name === newName)
    const changedPerson = { ...person, number: newNumber}

    personService
      .update(person.id, changedPerson)
      .then(returnedPerson => {
        setPersons(persons.map(p => p.id === person.id ? returnedPerson : p))
        setNewName('')
        setNewNumber('')

        isError = false
        setNotification(
          `Updated ${newName}'s number`
        )
        setTimeout(() => {
          setNotification(null)
        }, 5000)
      })
      .catch(error => {
        isError = true
        setNotification(
        `Information of ${newName} has already been removed from the server`
        )
        setTimeout(() => {
          setNotification(null)
        }, 5000)
      })
  }

  const addPerson = event => {
    event.preventDefault()

    if (persons.some(person => person.name === newName)) {

      if (newNumber) {
        if (confirm(`${newName} is already added to phonebook, replace the number with a new one?`))
          updateNumber()
      } else {
        alert(`${newName} is already added to phonebook`)
      }

    } else {
      const personObject = {
        name: newName,
        number: newNumber
      }

      personService
        .create(personObject)
        .then(newPerson => {
          setPersons(persons.concat(newPerson))
          setNewName('')
          setNewNumber('')

          isError = false
          setNotification(
            `Added ${newName}`
          )
          setTimeout(() => {
            setNotification(null)
          }, 5000)
        })
        .catch(error => {
          isError = true
          setNotification(
          `Information of ${newName} has already been removed from the server`
          )
          setTimeout(() => {
            setNotification(null)
          }, 5000)
        })
    }
  }

  const removePerson = (id) => {
    const nameOfTheDeleted = persons.find( p => p.id === id).name
    if (confirm(`Delete ${nameOfTheDeleted}`)) {
    
      personService
        .remove(id)
        .then( () => {
          console.log(persons)
          setPersons(persons.filter( p => p.id != id))
        })
        .catch(error => {
          isError = true
          setNotification(
          `Information of ${newName} has already been removed from the server`
          )
          setTimeout(() => {
            setNotification(null)
          }, 5000)
        })
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
        <Notification
          message={notification}
          isError={isError}
        />
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
          removePerson={removePerson}
        />
    </div>
  )
}

export default App