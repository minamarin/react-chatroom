import { useState, useEffect } from 'react';
import Message from './message';
import './App.css';

function App() {
  const [messageArray, setMessageArray] = useState([]);

  useEffect(() => {
    fetch('https://ohwuvawrw4.execute-api.us-west-2.amazonaws.com/messages')
      .then((response) => response.json())
      .then((data) =>
        setMessageArray(
          data.map((element, index) => {
            return <Message chat={element.message} key={index} />;
          }).reverse()
        )
      );
  }, []);

  return (
    <div className="chat-container">
      <h1> PTRI CHATS </h1>
      <div className="message-list">
        {messageArray}
      </div>
    </div>
  );
}

export default App;
