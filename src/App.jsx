import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Character from './components/Character'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Character name="Cassiel" type="Sorcerer" />
      <Character name="Ghor" type="Weaponmaster" />
      <Character name="John" type="Fighter" />
    </>
  )
}

export default App
