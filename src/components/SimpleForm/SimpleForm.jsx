import React from 'react'

const SimpleForm = () => {
  const handleClick=e=>{
    console.log('form submitted')
  }
  return (
    <div>
      <form onSubmit={handleClick}>
        <label htmlFor="">Name</label>
        <input type="text" name="" id="" />
        <br />
      <input type="submit" value="Submit" />
      </form>
      
    </div>
  )
}

export default SimpleForm
