import React, { useState, useEffect } from 'react';
import './App.scss';
import Box from './Box';

/*
Test Data
const advice = [
  {"slip": 
    { 
      "id": 85, "advice": "If you don't want something to be public, don't post it on the Internet."
    }
  }
]*/

function App() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [advices, setAdvice] = useState([]);

  useEffect(() => {
   getData();
  }, [])

  function getData () {
    fetch("https://api.adviceslip.com/advice")
    .then(res => res.json())
    .then(
      (result) => {
        setIsLoaded(true);
        setAdvice(result);
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    )
  }

  if (error) {
    return (
      <Box advice={error.message} adviceNr="Could not connect to API :-("/>
    )
  } else if (!isLoaded) {
    return (
      <Box advice="Loading" adviceNr=""/>
    )
  } else {
    return (
      <div className="App">
        <Box handleNewData={getData} advice={advices.slip.advice} adviceNr={`ADVICE #${advices.slip.id}`}/>
      </div>
    );
  }
}

export default App;
