import { useState } from 'react'

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const HandleNextAnecdote = (setSelected, anecdotes) => {
  const randomIndex = getRandomInt(anecdotes.length - 1)
  setSelected(randomIndex)
}

const HandleVotes = (setVotes, setMostVoted, votes, selected) => {
  const newVotes = [ ...votes ]
  newVotes[selected] += 1
  setVotes(newVotes)
  setMostVoted(newVotes.indexOf(Math.max(...newVotes)))
}

const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const Display = ({text}) => <div>{text}</div>

const DisplayTitle = ({text}) => <div><h1>{text}</h1></div>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [mostVoted, setMostVoted] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  return (
    <div>
      <DisplayTitle text="Anecdote of the day" />
      <Display text={anecdotes[selected]} />
      <Display text={`has ${votes[selected]} votes`} />
      <Button onClick={() => HandleVotes(setVotes, setMostVoted, votes, selected)} text="vote" />
      <Button onClick={() => HandleNextAnecdote(setSelected, anecdotes)} text="next anecdote" />
      <DisplayTitle text="Anecdote with most votes" />
      <Display text={anecdotes[mostVoted]} />
      <Display text={`has ${votes[mostVoted]} votes`} />
    </div>
  )
}

export default App