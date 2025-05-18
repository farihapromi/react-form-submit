import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SimpleForm from './components/SimpleForm/SimpleForm'
import StateFullForm from './components/StateFullForm/StateFullForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <SimpleForm/> */}
     <StateFullForm/>
    </>
  )
}

export default App
