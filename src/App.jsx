import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header'
import { Button } from '@mui/material'
import Buttons from './components/Buttons'
import { DisplayUsers } from './components/DisplayUsers'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <Buttons />
      <DisplayUsers/>
    </div>
  )
}

export default App
