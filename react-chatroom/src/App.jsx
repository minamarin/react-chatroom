import { useState, useEffect } from 'react';
import Message from './message';
import './App.css';

function App() {
  const [messageArray, setMessageArray] = useState([]);

  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch('https://ohwuvawrw4.execute-api.us-west-2.amazonaws.com/messages')
      .then((response) => response.json())
      .then((data) => setMessageArray(data));
    // empty dependency array means this effect will only run once
  }, []);

  return (
    <>
      <h1> hello world </h1>
      {messageArray.map((element, index) => (
        <p key={index}>{element.message}</p>
      ))}
      {/* <Message messageArray={messageArray}></Message> */}
    </>
  );
}

export default App;
