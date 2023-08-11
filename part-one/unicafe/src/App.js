import { useState } from 'react'

const Button = () => {
  return (
    <div>

    </div>
  )
}

const StatisticLine = ({ text, value, extra }) => {
  return (
    <div>
      <p>{text} {value} {extra}</p>
    </div>
  )
}

const Statistics = (props) => {
  if(props.total > 0){
    return (
      <div>
        <h2>statistics</h2>
        <StatisticLine text='good' value={props.good} />
        <StatisticLine text='neutral' value={props.neutral} />
        <StatisticLine text='bad' value={props.bad} />
        <StatisticLine text='all' value={props.total} />
        <StatisticLine text='average' value={(props.good-props.bad)/props.total} />
        <StatisticLine text='positive' value={props.positive} extra='%' />
      </div>
    )
  }
  return (
    <div>
      <h1>statistics</h1>
      <p>No feedback given</p>
    </div>
  )
  
}

const handleGoodClick = (good, setGood, bad, neutral, setTotal, setPositive, setAverage) => {
  const updatedGood = good + 1
  setGood(updatedGood)
  const updatedTotal = updatedGood + bad + neutral
  setTotal(updatedTotal)
  const goodPercentage = updatedGood/updatedTotal * 100
  setPositive(goodPercentage)
  setAverage(goodPercentage/updatedTotal)
}

const handleNeutralClick = (good, bad, neutral, setTotal, setNeutral) => {
  const updatedNeutral = neutral + 1
  setNeutral(updatedNeutral)
  const updatedTotal = good + bad + updatedNeutral
  setTotal(updatedTotal)
}

const handleBadClick = (good, bad, setBad, neutral, setTotal) => {
  const updatedBad = bad + 1
  setBad(updatedBad)
  const updatedTotal = good + updatedBad + neutral
  setTotal(updatedTotal)
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

    return ( 
      <div>
        <h1>give feedback</h1>
        <button onClick={() => handleGoodClick(good, setGood, bad, neutral, setTotal, setPositive, setAverage)}>good</button>
        <button onClick={() => handleNeutralClick(good, bad, neutral, setTotal, setNeutral)}>neutral</button>
        <button onClick={() => handleBadClick(good, bad, setBad, neutral, setTotal)}>bad</button>
        <Statistics good={good} neutral={neutral} bad={bad} total={total} positive={positive} />
      </div>
    )
  
}

export default App
