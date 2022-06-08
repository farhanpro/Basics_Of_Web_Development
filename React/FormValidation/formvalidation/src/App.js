import { useState,useEffect } from 'react';
import './App.css';

function App() {
  
  const inittialValues = {username:"",email:"",password:""};
  const [formValues,setFormValues] = useState(inittialValues);
  const [formErrors,setFormErrors] = useState({});
  const [isSubmit,setIsSubmit] = useState(false);
  
  const handleChange = (e) => {
     const {name,value} = e.target;
     setFormValues({...formValues,[name]:value});
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if(Object.keys(formErrors).length === 0 && isSubmit)
    {
      console.log(formValues);
    }
  },[formErrors])

  const validate =(values)=>
  {
    const errors ={}
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if(!values.username)
    {
      errors.username = "Username is Required !";
    }
    if(values.username.charAt(0) != values.username.charAt(0).toUpperCase())
    {
      errors.username = "First Character should be capital";
    }
    if(!values.email)
    {
      errors.email = "Email is Required !";
    }
    else if(!regex.test(values.email))
    {
      errors.email = "This is not a valid Email";
    }
    if(!values.password)
    {
      errors.password = "Password is Required !";
    }
    if(values.email.slice(-4) !== ".com")
    {
      errors.email = ".com is required";
    }
    else if(values.password.length < 4)
    {
      errors.password = "This is not a valid Password";
    }


    return errors;
    
  };

  return (
    <div className = "container">
    <pre>{JSON.stringify(formValues,undefined,2)}</pre>
      <form onSubmit={handleChange}>
        <h1>Login Form</h1>
        <div className = "ui divider"></div>
        <div className = "ui form">
          <div className =  "field">
            <label>Username</label>
            <input 
            type ="text" 
            name ="username" 
            placeholder="Username" 
            value={formValues.username}
            onChange={handleChange}
            />
          </div>
          
          <p>{formErrors.username}</p>

          <div className = "field">
            <label>Email</label>
            <input 
            type="email" 
            name = "email" 
            placeholder="Email" 
            value={formValues.email}
            onChange={handleChange}  
            />
          </div>
          <p>{formErrors.email}</p>

          <div className="field">
            <label>password</label>
            <input 
            type = "password" 
            name="password" 
            placeholder="password" 
            value={formValues.password}
            onChange={handleChange}  
            />
          </div>
          <p>{formErrors.password}</p>
          <button className = "fluid ui button blue" onClick = {handleSubmit}> Submit </button>
        </div>
      </form>
    </div>
  );
}

export default App;
