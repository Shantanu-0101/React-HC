import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15)

  // let counter = 15

  const addValue = () => {
    setCounter(counter + 1)
    }

  const removeValue = () => {

    if (counter == 0) {
      console.log("Limit reached")
      return;
    } 
      setCounter(counter - 1)
    }
  

  return (
    <>

      <h1>Shantanu Learning React</h1>
      <h2>Counter Value: {counter}</h2>

      <button
      onClick={addValue}>Add value</button>
      <br />
      <button
      onClick={removeValue}>Remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
