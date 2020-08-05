import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';

const CounterApp=({value})=>{
  
  const [counter, setCounter] = useState(value);  

  const handleAdd = (e) =>{
    setCounter(counter + 1);
    //setCounter((c) => c + 1);
  }

  const handleRemove = (e) =>{
    setCounter(counter - 1);
  }

  const handleReset = (e) =>{
    setCounter(value);
  }

  return (
    <Fragment>
    <p>CounterApp</p>
    <h1>{counter}</h1>
    <button onClick={ handleAdd }> +1 </button>
    <button onClick={ handleReset }> Reset </button>
    <button onClick={ handleRemove }> -1 </button>
    </Fragment>
  );
  
}

CounterApp.propTypes ={
   value : PropTypes.number
}

export default CounterApp;

