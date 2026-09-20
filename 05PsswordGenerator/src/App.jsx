import { useState, useCallback } from 'react'

function App() {
  const [length, seLength] = useState(8)
  const [numberAllowed, setNumberallowed] = useState(false)
  const [chars, setChars] = useState(false)
  const [pass, setPass] = useState("")
  
  const passwordGenerator = useCallback(() =>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789" 
    if (chars) str += "!@#$%^&*_+=[]{}~`"
    
    for (let i = 1; i <= array.length; i++){
      const char = Math.floor(Math.random() *  str.length + 1)

      pass = str.charAt(char)
     
    }

    setPass()



  }, [length, numberAllowed,chars, setPass] )

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
        <h2 className='text-white text-center my-3'>Password Generator</h2>
        <div className='flex shadow-lg rounded-lg mb-4 bg-white'>
          <input type="text"
          value={pass}
          className='outline-none w-full py-1 px-3'
          placeholder='passowrd'
          readOnly
          />

          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2 '>
          <div className='flex items-center gap-x-1'>
            <input type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer' 
            onChange={(e) => {setLength(e.target.value )}}
            />
            <label >Length={length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={() => {
              setNumberallowed((prev) => !prev);
            }}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
