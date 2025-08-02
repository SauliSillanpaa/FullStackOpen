import { useState } from 'react'

const Persons = ({persons, findName}) => {
  return (
    <ul>
      {persons.filter(person => person.name.toLowerCase().includes(findName.toLowerCase()))
        .map(person =>
        <Person key={person.name} person={person} />
      )}
    </ul>
  )
}

const Person = ({ person }) => {
  return <li>{person.name} {person.number}</li>
}

const PersonForm = ({addPerson, newName, handleNameChange, newNumber, handleNumberChange}) => {
  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input
          value={newName}
          onChange={handleNameChange}
        />
      </div>
      <div>
        number: <input
          value={newNumber}
          onChange={handleNumberChange}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

const Filter = ({findName, handleFindNameChange}) => {
  return (
    <div>
      filter shown with <input
        value={findName}
        onChange={handleFindNameChange}
      />
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [findName, setFindName] = useState('')

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