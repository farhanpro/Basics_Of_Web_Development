import './App.css';
import content from './static';
import { useForm } from 'react-hook-form';


function App() {
  const {register,handleSubmit,errors} = useForm(); 
  const onSubmit = (data) =>
  {
     console.log(data);
  }

  return (
    <div className="App">
      <h1>React Hook App</h1>
      <form onSubmit = {handleSubmit(onSubmit)}>

      {content.inputs.map((input,key) =>{
        return(
          <div key={key}> 
          <p><label>{input.label}</label></p>
          <p>
          <input   
                    name={input.name} 
                    ref =   {register}
                    />
              </p>
            </div>
        );
      })}
     
      <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
