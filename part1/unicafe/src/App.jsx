import { useState } from 'react'

const Display = ({text}) => <div><h1>{text}</h1></div>

const StatisticLine = ({text, value, unit}) => {
  return (
    <tbody>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
        <td>{unit}</td>
      </tr>
    </tbody>
  )
}

const Statistics = ({good, neutral, bad}) => {
  if (good + neutral + bad <= 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <table>
      <StatisticLine text={"good"} value={good} />
      <StatisticLine text={"neutral"} value={neutral} />
      <StatisticLine text={"bad"} value={bad} />
      <StatisticLine text={"all"} value={good + neutral + bad} />
      <StatisticLine text={"average"} value={(good - bad) / (good + neutral + bad)} />
      <StatisticLine text={"positive"} value={(good / (good + neutral + bad)) * 100} unit="%" />
    </table>
  )
}

const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Display text="give feedback" />
      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />
      <Display text="statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App