import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind CSS</h1>
      < Card username="shantanupanchal" BtnText='click me' />
      <Card username="Panchal Shantanu" BtnText='visit me'/>
    </>
  )
}

export default App
