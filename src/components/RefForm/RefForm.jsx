import React, { useEffect, useRef } from 'react'

const RefForm = () => {
    const nameRef=useRef(null)
    const handleSubmit=e=>{
        e.preventDefault()
        console.log(nameRef.current.value)

    }
    useEffect(()=>{
        nameRef.current.focus()
    },[])
  return (
    <div>
         <form onSubmit={handleSubmit}>
        <label htmlFor="">Name</label>
        <input type="text" name="name" id=""  ref={nameRef}/>
        <br />
        <label htmlFor="">Email</label>
              <input type="email" name="email" id=""  />
        <br />
          <label htmlFor="">password</label>
              <input type="password" name="password" id=""  />
        <br />
      <input type="submit" value="Submit" />
      </form>
      
      
    </div>
  )
}

export default RefForm
