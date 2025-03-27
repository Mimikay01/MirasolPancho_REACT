import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Box1 from "./Box1"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>{count}</h1>
      <div className="card">
        <Box1 count={count} setCount={setCount}/>
      </div>
    </>
  )
}

export default App