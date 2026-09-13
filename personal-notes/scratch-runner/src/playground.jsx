// I use this file for rough workings & to test various things in javascript

import { useState} from 'react'



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


export default App