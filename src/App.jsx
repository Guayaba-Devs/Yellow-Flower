import './App.css'
import { Message } from './components/CreateMessage/Message'
import { Flower } from './components/FlowerVisualize/Flower'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Message />} />
        <Route path="/message/:message" element={<Flower />} />
      </Routes>
    </>
  )
}

export default App
