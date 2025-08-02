const Header = (props) => <h2>{props.course}</h2>

const Content = ({parts}) => {
  console.log('Parts are: ', parts);
  
  return ( 
    <div>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </div>
  )
}

const Part = ({part}) => (
  <p>
    {part.name} {part.exercises}
  </p>
)

const Total = ({parts}) => (
  <b>
    Number of exercises {
      parts.reduce( (sum, part) => {
        return sum + part.exercises
      }, 0)
    }
  </b>
)

const Course = ({course}) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const Courses = ({courses}) => {
  console.log('Courses: ', courses)
  return (
    <div>
      <h1>Web development curriculum</h1>
      {courses.map((course) => (
        <Course key={course.id} course={course} />
      ))}
    </div>
  )
}

export default Courses