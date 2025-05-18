import React, { useState } from 'react'

const StateFullForm = () => {
    const[email,setEmail]=useState(null)
    const[password,setPassword]=useState(null)
    const handleSubmit=e=>{
        e.preventDefault()

    }
    const handleEmail=e=>{
      setEmail(e.target.value)
    }
    const handlePassword=e=>{
        setPassword(e.target.value)

    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <label htmlFor="">Name</label>
        <input type="text" name="name" id="" />
        <br />
        <label htmlFor="">Email</label>
              <input type="email" name="email" id=""  onChange={ handleEmail}/>
        <br />
          <label htmlFor="">password</label>
              <input type="password" name="password" id=""  onChange={ handlePassword}/>
        <br />
      <input type="submit" value="Submit" />
      </form>
      
    </div>
  )
}

export default StateFullForm
