import React from 'react'

const SimpleForm = () => {
  const handleClick=e=>{
    e.preventDefault();
    console.log(e.target.name.value)
    console.log(e.target.email.value)
    console.log('form submitted')
  }
  return (
    <div>
      <form onSubmit={handleClick}>
        <label htmlFor="">Name</label>
        <input type="text" name="name" id="" />
        <br />
        <label htmlFor="">Email</label>
              <input type="text" name="email" id="" />
        <br />
      <input type="submit" value="Submit" />
      </form>
      
    </div>
  )
}

export default SimpleForm
