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

  const handleToggle = () => {
    return
    setIsOn(true)
    // TODO: Write state update logic here
    // Pseudocode: if true set false, if false set true
  }

  return (
    <button onClick={handleToggle}>
      {isOn ? 'ON' : 'OFF'}
    </button>
  )
}

//Topic 3


