import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SimpleForm from './components/SimpleForm/SimpleForm'
import StateFullForm from './components/StateFullForm/StateFullForm'
import RefForm from './components/RefForm/RefForm'
import CustomHook from './components/CustomHook/CustomHook'
import Reusable from './components/Resuable/ReusableForm'

function App() {
  const handleSignUp=data=>{
    console.log('data of signup',data)

  }
  const handleProfile=data=>{
    console.log('data of profile',data)

  }
  
  return (
    <>
    {/* <SimpleForm/> */}
     {/* <StateFullForm/> */}
     {/* <RefForm/> */}
     {/* <CustomHook/> */}
     <Reusable formTitle={'Signup Form'} handleSubmit={handleSignUp}/>
     <br />
        <Reusable formTitle={'Profile Form'} handleSubmit={handleProfile}/>
    </>
  )
}

export default App
