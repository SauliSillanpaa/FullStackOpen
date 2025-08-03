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

export default Persons