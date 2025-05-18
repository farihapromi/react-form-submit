import React from 'react'

const CustomHook = () => {
    const handleSubmit=e=>{
        e.preventDefault()
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <label htmlFor="">Name</label>
        <input type="text" name="name" id="" />
        <br />
        <label htmlFor="">Email</label>
              <input type="email" name="email" id="" />
        <br />
      <input type="submit" value="Submit" />
      </form>
      
    </div>
  )
}

export default CustomHook
