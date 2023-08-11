import { useState } from 'react'

const handleAnecdotesClick = (min, max, setSelected) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  const uppdateAbecdotes = Math.floor(Math.random() * (max - min) + min)
  setSelected(uppdateAbecdotes)
}

const handleVotesClick = (votes, setVotes, point) => {
  const copy = { ...votes }
  copy[point] += 1
  setVotes(copy)
  console.log(copy)
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([0,0,0,0,0,0,0,0])

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={() => {handleVotesClick(votes, setVotes, selected)}}>vote</button>
      <button onClick={() => {handleAnecdotesClick(0, 8, setSelected)}}>next anecdotes</button>
    </div>
  )
}

export default App
