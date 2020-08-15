import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const indexOfMax = (arr) => {
  // if (arr.length === 0) {
  //     return -1;
  // }
  
  let max = arr[0];
  let maxIndex = 0;

  for (var i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
          
          maxIndex = i;
          max = arr[i];
      }
      // console.log(arr[i])
  }
  
  return maxIndex;
}

const App = (props) => {

  const quotes = props.anecdotes
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(quotes.length).fill(0));
  // find most voted quote
  const [index_of_max, setMaxIndex] = useState(0)
  
  
  const increaseVote = () => {
    const copy = [...votes]
    copy[selected] += 1
    console.log(copy)

    // console.log(indexOfMax(copy))
    setMaxIndex(indexOfMax(copy))
    
    return setVotes(copy)
  }

  const randomIndexForQuote = () => {
  
    // console.log(quotes.length);
    const index = Math.floor(Math.random() * quotes.length);
    // console.log(index);    
    return setSelected(index)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {quotes[selected]}<br></br>
      has {votes[selected]} votes<br></br>
      <Button
        handleClick={increaseVote}
        text='vote'
      />
      <Button
        handleClick={randomIndexForQuote}
        text='next anecdote'
      />
      <h1>Anecdote with most votes</h1>
      
      {quotes[index_of_max]}<br></br>
      has {votes[index_of_max]} votes<br></br>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)