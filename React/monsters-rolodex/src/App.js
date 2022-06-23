import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor()
  {
    super();
    this.state ={monsters : [{name:'Linda'},{name:'Frank'},{name:'Jacky'},{name:'Farhan'}]};
  }

  render() {
    function Returner(monsters)
    {
      return monsters.name;
    }
    return (
      <div className="App">{this.state.monsters.map((monsters)=>{return <h1>{Returner(monsters)}</h1>})}</div>
    );
  }
  
}

export default App;
