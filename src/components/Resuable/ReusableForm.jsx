import React from 'react'

const Reusable = ({formTitle,handleSubmit}) => {
     const handleLocalSubmit=e=>{
        e.preventDefault()
        const data={
          name:e.target.name.value,
          email:e.target.email.value
        }
        handleSubmit(data)

    }
  return (
    <div>
      
      <h1>{formTitle}</h1>
      <form onSubmit={ handleLocalSubmit}>
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

export default Reusable
