/**
 * 1.Use form tag and onSubmit handler with event
 * From e access e.target.[name of the input field].value
 * 2. Controlled Element: Use indivitual field state for each field
 * const[email,setEmail]=useState(null)
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

     3.Controlled Element: One Object holding all the input field
     4.Uncontrolled element:useRef to create a reference to the element and acces by using like :nameref.current.value
     5.use hook to handle submit,states and error.example reacxt hook form
     6.reusabale component
 *
 */
