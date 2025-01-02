import { useState } from 'react'
import './App.css'

function App() {
  
  let [counter, utsavCounter ] = useState(0); // Passed any things at the useState
  let [condition, setcondition ] = useState('');

  const addValue = () => {
    // counter += 1;
    if (counter + 1 <= 20){
      utsavCounter(counter += 1);
      console.log("add Value : ",counter);
      setcondition('');
    }
    else{
      console.log('Count Can not be Added More.');
      setcondition('Count Can not be Added More.');
    }
  }
  
  const removeValue = () => {
    if(counter - 1 >= 0 ){
      utsavCounter(counter -= 1 );
      console.log("remove Value : ",counter);
      setcondition('');
    }
    else{
      console.log('Count Can not be Remove More.');
      setcondition('Count Can not be Remove More.');
    }
  }

  return (
    <>
      <h1>Counter Projecet</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>
        Add Value
      </button>
      <br />
      <br />
      <button onClick={removeValue}>
        Remove Value
      </button>
      <h5 class="h5_condition">{condition}</h5>
      <h3>Fotter : {counter}</h3>
    </>
  )
}

export default App
