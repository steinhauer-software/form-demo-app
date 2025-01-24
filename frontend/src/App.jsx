import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <form action='https://webhosterei.com/form-demo.php' method='post'>
        <div>
          <label htmlFor='name'>Name:</label>
          <input type='text' id='name' name='name' />
        </div>

        <div>
          <label htmlFor='email'>Email:</label>
          <input type='email' id='email' name='email' />
        </div>

        <div>
          <label htmlFor='message'>Message</label>
          <textarea id='message' name='message'></textarea>
        </div>

        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default App
