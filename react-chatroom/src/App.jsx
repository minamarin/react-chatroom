import { useState, useEffect } from 'react';
import Message from './message';
import './App.css';

function App() {
  const [messageArray, setMessageArray] = useState([]);
  useEffect(() => {
    fetch('https://ohwuvawrw4.execute-api.us-west-2.amazonaws.com/messages')
      .then((response) => response.json())
      .then((data) => {
        console.log(data[0].created_by ,  ' <------ ')
        setMessageArray(
          data.map((element, index) => {
            // return <Message message={element.message} key={index} />;
         
            return <Message dateSent={element.created_at} message={element.message} key={index} />;
          })
        )}
      );
  }, []);
  console.log(messageArray);
  return (
    <div className='chat-container'>
      <h1> PTRI CHATS </h1>
      {messageArray}
    </div>
  );
}

export default App;
