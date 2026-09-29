import { useState} from 'react'

const Button = (props) => {
  const handleClick = () => {
    console.log(props.text, ' button was clicked')
    props.onClick()
  }
  
  return <button onClick={handleClick}>{props.text}</button>
}

const Display = ({text}) => {
    return <p>{text}</p>
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const all = good + neutral + bad
  const average = (good - bad) / all
  const positive = (good / all) * 100

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={() => setGood(good+1)} text="Good"/>
      <Button onClick={() => setNeutral(neutral+1)} text="Neutral"/>
      <Button onClick={() => setBad(bad+1)} text="Bad"/>
      <h1>Statistics</h1>
      <Display text={'good ' + good}></Display>
      <Display text={'neutral ' + neutral}></Display>
      <Display text={'bad ' + bad}></Display>
      <Display text={'all ' + all}></Display>
      <Display text={'average ' + average}></Display>
      <Display text={'positive ' + positive + '%'}></Display>
    </div>
  )
}
// Completed 1.7, currently on exercise 1.8

export default App
