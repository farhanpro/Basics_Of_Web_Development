import { useState } from 'react';
import { useForm } from 'react-hook-form';
import './App.css';

function App() {
  const {register,handleSubmit, formState: { errors }} = useForm();
  const [userInfo,setUserInfo] = useState();
  console.log(errors);
  const onSubmit =(data) =>
  {

    setUserInfo(data);
    console.log(errors);
  }

 
  return (
    <div className="App">
    <pre>{JSON.stringify(userInfo,undefined,2)}</pre>
      <form onSubmit={handleSubmit(onSubmit)}>
      
        <h1>
        
        {JSON.stringify(userInfo,undefined,2)}
        </h1>
        
        <div className = "App-header"> 
        <div>
        <label>UserName</label>
        <input type="text" name = "username" placeholder="userName"  {...register('username',{required:"username is Required"})}/>
        </div>
        {errors.username && <p>{errors.username.message}</p>}
        {/* <p>{errors?.username.message}</p> */}
        
        <br></br>
        <div>
        <label>Email</label>
        <input type="email" name = "email" placeholder="Email"  {...register('email',{required:"Email is Required",pattern: ".com" })}/>
        </div>
        {errors.username && <p>{errors.username.message}</p>}
        {/* <p>{errors.email?.message}</p>*/}

        <br></br> 
        <div>
        <label>Password</label>
        <input type="password" name = "password" placeholder="Password"  {...register('password',{required : "Password is Required",  })}/>
        </div>
        {errors.username && <p>{errors.username.message}</p>}
        {/* <p>{errors.password?.message}</p> */}

        <button className="fluid ui  button">Submit</button>

        </div>
      </form>
    </div>
  );
}

export default App;
