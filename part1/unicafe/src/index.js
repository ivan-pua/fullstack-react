import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const Statistic = (props) => {
  const { value, text } = props;
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}


// a proper place to define a component
const Statistics = (props) => {
  const { goodC, neutralC, badC } = props;
  console.log(goodC, neutralC, badC) // debug
  const all = goodC+neutralC+badC;
  const average = (goodC - badC)/all;
  const positive = (goodC/all)*100 + " %"
  if (all === 0) {
    return (
      <div>No feedback given</div>
    )
  } else {
    return (
      <table>
        <tbody>
          <Statistic value={goodC} text="good"/>
          <Statistic value={neutralC} text="neutral"/>
          <Statistic value={badC} text="bad"/>
          <Statistic value={all} text="all"/>
          <Statistic value={average} text="average"/>
          <Statistic value={positive} text="positive"/>
        </tbody>

      </table>
    )
  }

}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)


  return (
    <div>
      <h1>What is your feedback on Chaco Bar?</h1>
      <Button
        handleClick={increaseGood}
        text='good'
      />
      <Button
        handleClick={increaseNeutral}
        text='neutral'
      />     
      <Button
        handleClick={increaseBad}
        text='bad'
      />  
      <h1>Statistics</h1>
      {/* C stands for count */}
      <Statistics goodC={good} neutralC={neutral} badC={bad}/> 
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)