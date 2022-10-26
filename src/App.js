import { useState } from "react";
import { data } from "./data";
import './App.css';

function App() {

  const [person, setPerson] = useState(0);
  const {id, name, description, age, image} = data[person];
  
const previousPerson = (i) => {
  setPerson((person => {
    person --;
    if (person < 0) { 
      person = data.length - 1;
  }
    return person;
  }))
}

const nextPerson = () => {
setPerson((person => {
  person ++;
  if (person > data.length -1) {
    person = 0; 
}
  return person;
}))
}

  return(<div>

    <div className="container">
      <img src={image} width="400px" alt="person"/>
    </div>

    <div className="container">
     <h1>{id} - {name}</h1>
    </div>

    <div className="container">
      <h2>{description}</h2>
    </div>

    <div className="container">
      <h2>{age}</h2>
    </div>

    <div className="btn container">
     <button onClick={previousPerson}>previous</button>
     <button onClick={nextPerson}>next</button>
    </div>


  </div>
  ) 
}

export default App;
