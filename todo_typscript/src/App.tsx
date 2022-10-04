import React from 'react';
import './App.css';

const name = "david"
function App() {
  const user = {
    firstName: "Angela",
    lastName: "Davis",
    role: "Professor",
  }
  const greet = () =>{
    return user.lastName
  }
  return (
    <div className="App">
      <h1> {greet()} Hello Typscript</h1>
    </div>
  );
}

export default App;
