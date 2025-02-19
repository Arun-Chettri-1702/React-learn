import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  //let counter = 17;

  // everytime we update counter new state is given hence it can be set to const
  // inside useState is initial value of counter
  const [counter, setCounter] = useState(17);

  const addValue = () => {
    // counter++;
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  };

  const deleteValue = () => {
    setCounter(counter - 1);
  };

  //any change in state re renders the webpage

  return (
    <>
      <h1>Learning React Course {counter}</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add value</button>{" "}
      <button onClick={deleteValue}>Remove value</button>
      <p>Footer : {counter} </p>
    </>
  );
}

export default App;
