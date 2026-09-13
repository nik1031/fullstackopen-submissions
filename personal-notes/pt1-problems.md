# Full Stack Open: Part 1c — Practice Problem Set & Reference Guide

This problem set covers the core concepts from **Full Stack Open Part 1c: Component state, event handlers**:
1. Modern JavaScript (ES6) Foundations (Destructuring, Arrow functions, Spread operator, Array methods)
2. React Component State & Event Handling (`useState`, avoiding infinite loop traps)
3. Component Architecture & State Lifting ("Data Down, Actions Up")

---

## 📌 Cheat Sheet & Core Concepts

### 1. Object & Array Destructuring
- **Objects**: Unpacks values matching **key names**.
  ```javascript
  const props = { name: 'Maya', age: 36 }
  const { name, age } = props // Extracts name and age
  ```
- **Direct Parameter Destructuring**:
  ```javascript
  const Hello = ({ name, age }) => <div>{name} is {age}</div>
  ```
- **Arrays**: Unpacks values matching **positional order**.
  ```javascript
  const [counter, setCounter] = useState(0)
  ```

### 2. React State (`useState`)
- React components do not persist standard variable updates across re-renders. `useState` hooks store dynamic data in React's internal state.
- **Rule 1**: Never mutate state variables directly (e.g. `counter = 5` is forbidden).
- **Rule 2**: Always update state using the updater function (e.g. `setCounter(counter + 1)`). Calling the updater schedules a component re-render.

### 3. Event Handlers
- Pass a **function reference** or an **arrow function** to event attributes like `onClick`.
- ✅ `onClick={handleClick}`
- ✅ `onClick={() => setCounter(counter + 1)}`
- ❌ `onClick={setCounter(counter + 1)}` — **Infinite Loop Trap**: Calling the function directly during render triggers state change -> re-render -> function call -> re-render loop.

### 4. Data Down, Actions Up
- **Parent to Child**: Parents pass data down to child components via `props`.
- **Child to Parent**: Parents pass state updater functions down to children. Children execute these functions on user interaction, notifying the parent to update state.

---

## 📝 Practice Exercises

### Topic 1: Modern JavaScript Foundations

#### Exercise 1.1: Arrow Functions & Implicit Return
Convert this standard function declaration into a single-line arrow function that uses an **implicit return** (no `{}` or `return` keyword):
```javascript
function calculateAge(birthYear) {
  return 2026 - birthYear;
}
```

#### Exercise 1.2: Object Destructuring in Parameters
Complete the function `getPersonSummary` so that it extracts `name` and `age` directly inside the parameter list (using object destructuring) and returns the string `"Maya is 36 years old"`:
```javascript
// TODO: Destructure name and age directly in the function parameters
const getPersonSummary = (/* fill in here */) => {
  return `${name} is ${age} years old`;
}

// Test call: getPersonSummary({ name: 'Maya', age: 36, location: 'Helsinki' })
```

#### Exercise 1.3: Immutable Object Updates
Given the following object:
```javascript
const user = { name: 'Arto', score: 10, role: 'student' };
```
Write a single line of code using the **spread operator** (`...`) to create a new object `updatedUser` that copies all properties from `user`, but updates `score` to `11`. Do not mutate `user`.

#### Exercise 1.4: Array `.map()` Transformation
Given an array of raw prices:
```javascript
const rawPrices = [10, 25, 50];
```
Use `.map()` to create a new array `formattedPrices` where each number is converted into a string prefixed with a dollar sign (e.g., `["$10", "$25", "$50"]`).

#### Exercise 1.5: Array Destructuring
Given the array returned by a hypothetical hook:
```javascript
const status = ['active', () => console.log('status changed')];
```
Use array destructuring to assign the string `'active'` to a variable named `currentStatus`, and the function to a variable named `setStatus`.

---

### Topic 2: React State & Event Handlers

#### Exercise 2.1: Fixing the Infinite Loop Bug
Explain in 1-2 sentences why the following button causes an infinite re-render loop, and write the corrected JSX line:
```jsx
// BROKEN:
<button onClick={setCounter(counter + 1)}>Increment</button>
```

#### Exercise 2.2: Toggling State
Complete this `Toggler` component so that clicking the button toggles `isOn` between `true` and `false`:
```jsx
import { useState } from 'react'

const Toggler = () => {
  const [isOn, setIsOn] = useState(false)

  const handleToggle = () => {
    // TODO: Write state update logic here
  }

  return (
    <button onClick={handleToggle}>
      {isOn ? 'ON' : 'OFF'}
    </button>
  )
}
```

#### Exercise 2.3: Correct Object State Updates
Given a component with object state:
```jsx
const [player, setPlayer] = useState({ name: 'Lee', health: 100 })
```
Write the event handler function `handleTakeDamage` that decreases `health` by `10` without mutating the `player` object directly.

#### Exercise 2.4: Tracing Execution & Re-renders
Look at this code snippet:
```jsx
const App = () => {
  const [count, setCount] = useState(0)
  console.log('Component rendered:', count)

  const handleClick = () => {
    setCount(count + 1)
  }

  return <button onClick={handleClick}>Count: {count}</button>
}
```
If the user loads the page and clicks the button **twice**, what exact lines will be logged to the browser console from initial render to the end?

#### Exercise 2.5: Multiple Reset Handlers
Given two state variables:
```jsx
const [leftClicks, setLeftClicks] = useState(5)
const [rightClicks, setRightClicks] = useState(8)
```
Write a single handler function `handleResetAll` that resets both counters to `0`.

---

### Topic 3: Component Architecture ("Data Down, Actions Up")

#### Exercise 3.1: Creating a Clean Child Component
Write a functional component called `Header` that:
1. Destructures `title` and `subtitle` directly from props.
2. Renders an `<h1>` containing `title` and an `<h2>` containing `subtitle`.

#### Exercise 3.2: Passing an Event Handler as a Prop
Write an `ActionButton` component that receives two props: `label` (a string) and `onPress` (a function). It should render an HTML `<button>` that executes `onPress` when clicked and displays `label` as its text.

#### Exercise 3.3: Wiring Parent and Child
Complete the `Parent` component so it passes `counter` and `handleIncrement` down to `ChildDisplayAndButton`:

```jsx
const ChildDisplayAndButton = ({ value, onIncrement }) => (
  <div>
    <p>Value: {value}</p>
    <button onClick={onIncrement}>+1</button>
  </div>
)

const Parent = () => {
  const [counter, setCounter] = useState(0)
  const handleIncrement = () => setCounter(counter + 1)

  return (
    <div>
      {/* TODO: Render ChildDisplayAndButton here with correct props */}
    </div>
  )
}
```

#### Exercise 3.4: Passing Data UP from Child to Parent
A child component needs to tell the parent *how much* to increase a score by (+5). Complete the `onClick` handler in `AddPointsButton` so it passes `5` as an argument into the `onAdd` prop:

```jsx
const AddPointsButton = ({ onAdd }) => {
  return (
    // TODO: Write onClick so it calls onAdd(5)
    <button onClick={/* fill in here */}>
      Add 5 Points
    </button>
  )
}
```

#### Exercise 3.5: Identifying Component Boundaries
Look at this monolithic component:
```jsx
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
```
List the **sub-components** you would break this into, and state what **props** each new sub-component would need to receive.

---

### Topic 3 Extra Practice — Repeat Reps

Two more in the style of 3.1 (data down, destructuring) and two more in the style of 3.2 (actions up, event handler as prop). Do these cold in `playground.jsx`, without looking at your 3.1/3.2 answers.

#### Exercise 3.6: A Second Data-Down Component
Write a functional component called `ProfileCard` that:
1. Destructures `username` and `bio` directly from props.
2. Renders an `<h3>` containing `username` and a `<p>` containing `bio`.

#### Exercise 3.7: A Third Data-Down Component
Write a functional component called `PriceTag` that:
1. Destructures `productName` and `price` directly from props.
2. Renders a `<span>` containing `productName` and a `<strong>` containing `price`, formatted with a `$` prefix (e.g. `$25`).

#### Exercise 3.8: A Second Actions-Up Component
Write a functional component called `LikeButton` that receives two props: `itemName` (a string) and `onLike` (a function). It should render an HTML `<button>` that executes `onLike` when clicked and displays the text `"Like {itemName}"` (e.g. `"Like Pizza"`).

#### Exercise 3.9: A Third Actions-Up Component
Write a functional component called `DeleteButton` that receives two props: `itemName` (a string) and `onDelete` (a function). It should render an HTML `<button>` that executes `onDelete` when clicked and displays the fixed text `"Delete"` — note `itemName` is received but not shown in the button's text.

---

### Micro-Drill: "Now vs Later" (the real bottleneck behind 2.1, 3.2, 3.4)

The single skill under almost every bug hit in Topic 2 and Topic 3: **does this line run the function immediately, or does it just hand over a function to be run later, by something else, when triggered?**

Core rule: a function name **with** `()` right after it runs immediately. A function name **without** `()` — or wrapped inside `() => ...` — does not run until something else calls it later. Anything written *inside* a `() => ...` box is sealed off and doesn't count as "running now," no matter what `()` appear inside it — only the outermost layer of the line matters.

For each line below, answer **now** or **later**:

1. `onClick={handleClick}`
2. `onClick={handleClick()}`
3. `onClick={() => handleClick(5)}`
4. `const age = calculateAge(1990)`
5. `const fn = calculateAge`
6. `rawPrices.map(p => \`$${p}\`)`
7. `setTimeout(() => console.log("hi"), 1000)`
8. `setCounter(counter + 1)`
9. `setCounter(prevState => prevState + 1)`
10. `<button onClick={() => {}}>Click</button>` — does clicking this do anything?

<details>
<summary>Answers (click to expand)</summary>

1. **Later** — bare function reference, React calls it on click.
2. **Now** — `()` calls it immediately, during render, not on click.
3. **Later** — sealed inside `() => ...`; `handleClick(5)` only runs once the wrapper itself is called (on click).
4. **Now** — `calculateAge(1990)` runs immediately; `age` gets the returned value.
5. **Later** (technically: "not yet, only if/when `fn()` is called somewhere else) — no `()`, so this just copies the function itself, unexecuted.
6. **Later**, once per array item — `.map()` calls `p => \`$${p}\`` itself, internally, for every item in the array. Same "hand over a function" idea, just called by `.map()` instead of a click.
7. **Later** — `console.log("hi")` is sealed inside `() =>`; `setTimeout` calls that wrapper after the 1000ms delay, not immediately.
8. **Now** — `counter + 1` is computed immediately, before being handed to `setCounter`.
9. **Later** (for the addition itself) — `prevState => prevState + 1` is a function, not a computed number yet; React runs the addition later, whenever it actually processes the update. (Calling `setCounter` itself always happens "now" in both #8 and #9 — the difference is whether the *value passed in* is already computed or is a deferred recipe.)
10. **Yes, something runs** — clicking calls the function. It just happens to contain zero instructions (`{}` is empty), so nothing visible happens. "Later" means "whatever's written runs when triggered," even if what's written is nothing.

</details>

**Related note — template literals, for review:** `` `$${p}` `` uses backticks (not `'` or `"`), which support `${expression}` — insert a value directly into a string. The `$` right before `${p}` is just a literal dollar-sign character; it has nothing to do with the `${}` syntax, it's a coincidence of both using `$`. Equivalent to `"$" + p`, and the same idea as Python's f-strings (`f"Hello {name}"` vs JS's `` `Hello ${name}` ``).
