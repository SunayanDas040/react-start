import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(5);
  const incrementValue = () => {
    if (counter >= 20) return;
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  }
  const decrementValue = () => {
    if (counter === 0) return;
    setCounter(counter - 1);
  }
  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter Value : { counter }</h2>
      <button className='btn-incr' onClick={incrementValue}>Increment</button>
      <button onClick={decrementValue}>Decrement</button>
    </>
  )
}

export default App
