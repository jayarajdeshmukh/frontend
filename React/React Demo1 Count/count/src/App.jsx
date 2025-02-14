import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>The count is{count}</div>
    <button onClick={()=>setCount(count+1)}>Increase count</button>
    <button onClick={()=>setCount(count*0)}>Update count</button>
    <button onClick={()=>setCount(count-1)}>Decrease count</button>
    </>
  )
}

export default App
