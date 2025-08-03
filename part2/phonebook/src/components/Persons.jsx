const Persons = ({persons, findName, removePerson}) => {
  return (
    <ul>
      {persons.filter(person => person.name.toLowerCase().includes(findName.toLowerCase()))
        .map(person =>
        <Person
          key={person.name}
          person={person}
          removePerson={() => removePerson(person.id)}
        />
      )}
    </ul>
  )
}

const Person = ({ person, removePerson }) => {
  return (
    <li>
      {person.name} {person.number}
      <button onClick={removePerson}>delete</button>
    </li>
  )
}

export default Persons