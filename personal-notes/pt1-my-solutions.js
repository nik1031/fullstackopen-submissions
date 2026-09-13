// Here I am practicing various aspects of JavaScript & React to progress my comprehension in part 1c of Fullstackopen. 
// I got Claude to generate me a series of short problems which can be found in /personal-notes/pt1-problems.md
// I use this file whenever I need to cross-reference implementation of particular functionality of the language

//Topic 1 Object & Array Destructuring

// Exerercise 1.1 - Arrow Functions & Implicit Return
const calculateAge = (birthYear) => 2026 - birthYear;

// Exerercise 1.2 - Object Destructuring in Parameters
const getPersonSummary = ({name, age}) => {
    return `${name} is ${age} years old`;
}

// Exercise 1.3 - Immutable Object Updates
const user = {name: 'Arto', score: 10, role:'student'}
const updatedUser =  {...user,score : 11}

// Exercise 1.4 - Array .map() transformation
const rawPrices = [10 ,20, 50];
const formattedPrices = rawPrices.map(p => `$${p}` )

// Exercise 1.5 Array Destructuring
const status = ['active', () => console.log('status changed')];
const [currentStatus, setStatus] = status

//Topic 2 React State (useState)
// Rule 1: Never mutate state variables directly
// Rule 2: Always update state using updater function

// Exercise 2.1: Fixing the Inifnite Loop Bug 

// BROKEN:
// <button onClick={setCounter(counter + 1)}>Increment</button>

// Explanatation:
// Setting () after the name of the function will trigger it on the initial render, 
// Since trigerring it forces a re-render the next render will trigger it again causing recursive rendering
// We must be defining the function (creating a callback function) not triggering it which is done by using ' () => funcName' format
// I.e. the solution is <button onClick={() => setCounter(counter + 1)}>Increment</button>

// Exercise 2.2: Toggling State
import { useState } from 'react'

const Toggler = () => {
  const [isOn, setIsOn] = useState(false)

  const handleToggle = () => setIsOn(!isOn)
    // Pseudocode: if true set false, if false set true
  return (
    <button onClick={handleToggle}>
      {isOn ? 'ON' : 'OFF'}
    </button>
  )
}

// Exercise 2.3 Correct Object State Updates
const [player, setPlayer] = useState({name:'Leo', health: 100})

const handleTakeDamage  = () => {
     setPlayer({ ...player, health: player.health - 10 })
};


// Exercise 2.4 Tracing Execution & Re-renders

const App = () => {
    const [count, setCount] = useState(0)
    console.log('Component rendered', count)

    const handleClick = () => {
      // prevState is better to use on multiple actions on count instead of setCount(count+1)
        setCount(prevState => prevState + 1)
    }

    return <button onClick={handleClick}>Count: {count}</button>
}

// Exercise 2.5: Multiple Reset Handlers
//Write a single handler function handleResetAll that resets both counters to 0.

const [leftClicks, setLeftClicks] = useState(5)
const [rightClicks, setRightClicks] = useState(8)

const handleResetAll = () => {
  setLeftClicks(0)
  setRightClicks(0)
}

//Topic 3: Component Architecture ("Data Down, Actions Up")

// Exercise 3.1: Creating a Clean Child Component
const props = {
  title : "Hello",
  subtitle : "welcome back"
}

const Header = ({title, subtitle}) => {
  return (<>
  <h1>
    {title}
  </h1>
  <h2>
    {subtitle}
  </h2>
  </>
  )};

const App = () => {
    return (<Header {...props} ></Header>)
}

// Exercise 3.2 Passing an Event Handler as a Prop
const text_to_render = "You Clicked Me"

const ActionButton = ({ onPress, label }) => <button onClick={onPress}>{label}</button>

const App = () => {
  const handleClick = () => console.log("clicked")

    return (
    <ActionButton label={text_to_render} onPress={handleClick} />
  )
}

// Exercise 3.3 Wiring Parent and Child
const ChildDisplayAndButton = ({ value, onIncrement }) => (
  <div>
    <p>Value: {value}</p>
    <button onClick={onIncrement}>+1</button>
  </div>
)

const Parent = () => {
  const [counter, setCounter] = useState(0)

  setCounter(prevState => { 
    //return has been removed as prevState + 1 is the only output
    prevState + 1
  })

  return (
    <div>
      <ChildDisplayAndButton value={counter} onIncrement={handleIncrement}></ChildDisplayAndButton>
    </div>
  )
}

// Exercise 3.4 Passing Data UP from Child to Parent
const AddPointsButton = ({ onAdd }) => {
  return (
    // TODO: Write onClick so it calls onAdd(5)
    <button onClick={() => onAdd(5)}>
      +5
    </button>
  )
}

// Exercise 3.5: Identifying Component Boundaries - TODO
const App = () => {
  const [temperature, setTemperature] = useState(20)

  return (
    <div>
      <div className="temp-display">Current Temp: {temperature}°C</div>
      <button onClick={() => setTemperature(temperature + 1)}>Warmer</button>
      <button onClick={() => setTemperature(temperature - 1)}>Colder</button>
    </div>
  )
}
