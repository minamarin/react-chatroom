import { useState, useEffect } from 'react';
import Message from './message';
import './App.css';

function App() {
  const [messageArray, setMessageArray] = useState([]);

  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch('https://ohwuvawrw4.execute-api.us-west-2.amazonaws.com/messages')
      .then((response) => response.json())
      .then((data) => setMessageArray(data))
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

  messageArray.map((element, index) => {
    return <h1 key={index}>{element.message}</h1>
  })

  return (
    <>
      <h1> hello world </h1>
      <Message messageArray={messageArray}></Message>
    </>
  );
}



export default App;
