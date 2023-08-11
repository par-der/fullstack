import { useState } from 'react'

const Statistics = (props) => {
  if(props.total > 0){
    return (
      <div>
        <h2>statistics</h2>
        <p>good {props.good}</p>
        <p>neutral {props.neutral}</p>
        <p>bad {props.bad}</p>
        <p>all {props.total}</p>
        <p>average {(props.good-props.bad)/props.total}</p>
        <p>positive {props.positive} %</p>
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
  //console.log(updatedGood)

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
