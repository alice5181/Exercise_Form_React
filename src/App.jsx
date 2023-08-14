import { useState } from 'react'
import './App.css'
import MainForm from './components/mainForm/MainForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <MainForm />  
    </>
  )
}

export default App
