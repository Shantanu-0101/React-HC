import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  useState()

  let counter = 5

  const addValue = () => {
    console.log("clicked", counter);
    counter = counter + 1
    }

  return (
    <>

      <h1>Shantanu Learning React</h1>
      <h2>Counter Value: {counter}</h2>

      <button
      onClick={addValue}>Add value</button>
      <br />
      <button>Remove value</button>
      
    </>
  )
}

export default App
