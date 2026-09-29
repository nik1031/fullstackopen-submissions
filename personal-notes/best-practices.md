# Best practices in fullstack js

This is a collection of best practices and coding conventions for fullstack JavaScript development, including React, Node.js, and related technologies. I will update this list as I continue thorugh the Fullstackopen course and gain more experience.

### Naming Conventions
- Use camelCase for variable and function names (e.g., `myVariable`, `myFunction`)
- Use PascalCase for component names (e.g., `MyComponent`) 
- Use UPPERCASE for constants (e.g., `MY_CONSTANT`)
- Use descriptive names that convey the purpose of the variable or function (e.g., `calculateTotalPrice` instead of `calcPrice`)
- Use singular nouns for variable names that hold a single item (e.g., `user`) and plural nouns for variable names that hold multiple items (e.g., `users`)
- Use verbs for function names that perform an action (e.g., `fetchData`, `handleClick`)
- Use prefixes for boolean variables (e.g., `isLoading`, `hasError`) to indicate their type
- Use suffixes for event handler functions (e.g., `onClick`, `onSubmit`) to indicate their purpose
- Use kebab-case for file and folder names (e.g., `my-component.js`, `my-folder`)

### React State Updates
- When a new state value depends on the previous one, prefer the updater-function form over reading the state variable directly:
  ```jsx
  // Prefer:
  setCount(prevCount => prevCount + 1)

  // Over:
  setCount(count + 1)
  ```
- Why: `count` inside a handler can be a stale snapshot from the render it was created in. `setCount(count + 1)` reads that snapshot, which is safe for a single update but risks using outdated values if multiple updates to the same state happen close together (e.g. called twice before a re-render, or inside a loop/async callback). `prevCount => prevCount + 1` always receives React's latest known state value at the time it actually runs, avoiding that risk.
- Applies to any state update that's a function of the current value — increments, toggles, appending to a list, etc.

- Do not define components inside another component. This prevents React optimisation as nested components are always treated as "new component" - Fullstackopen pt1d