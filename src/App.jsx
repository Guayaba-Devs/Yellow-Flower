import { useState } from 'react'
import './App.css'
import { Message } from './components/CreateMessage/Message'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Message />
      </div>
    </>
  )
}

export default App
