import { useState} from 'react'
import PropTypes from 'prop-types'

import './App.css'
import Button from './components/Button'

function Statistics({good,neutral,bad}){
    const dataAvailable = good > 0 || neutral > 0 || bad > 0 


  return(

      !dataAvailable
       ? <h3>No feedback given</h3>: 
      <>
        <h1>Statistics</h1>
        <h3>Good: {good}</h3>
        <h3>Neutral: {neutral}</h3>
        <h3>Bad: {bad}</h3>
        <h3>All: {good + bad + neutral}</h3>
        <h3>Average: {(good + bad + neutral)/3}</h3>
        <h3>Positive: {good/(good + bad + neutral) * 100}%</h3>
      </>
      
  )
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  function handleSetGood(){

    setGood(good+1)
  }
   function handleSetNeutral(){

  setNeutral(neutral+1)
 }

  function handleSetBad(){

  setBad(bad+1)
 }



  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={handleSetGood} text='Good' />
      <Button handleClick={handleSetNeutral} text='Neutral' />
      <Button handleClick={handleSetBad} text='Bad' />

      <Statistics good={good} neutral={neutral} bad={bad}/> 
    </div>
  )
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};

export default App
