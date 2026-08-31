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

//Exercise 2.1: Fixing the Inifnite Loop Bug

// BROKEN:
<button onClick={setCounter(counter + 1)}>Increment</button>
// Explanatation:



//Topic 3


