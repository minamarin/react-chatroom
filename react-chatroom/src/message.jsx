import { useState, useEffect } from 'react';
// import './App.css'; 

function Message(prop) {
  return (
    <>  
      <div className='dateSent'>{prop.dateSent}</div>
      {/* <div className='sentBy'>{prop.sentBy}</div> */}
      <div className='chatMessage'>{prop.message}</div>
    </>
  );
}




export default Message;
