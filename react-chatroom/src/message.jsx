import { useState, useEffect } from 'react';

const Message = (props) => {
  // let allMessages = [];
  // fetch('https://ohwuvawrw4.execute-api.us-west-2.amazonaws.com/messages')
  // .then(response => response.json())
  // .then(response => { allMessages = response.map((element, index) => {
  //         return <div key={index}>{element.message}</div>
  //     })
  // })
  // props.setMessageArray(allMessages);

  //   useEffect(() => {
  //     // GET request using fetch inside useEffect React hook
  //     fetch('https://ohwuvawrw4.execute-api.us-west-2.amazonaws.com/messages')
  //         .then(response => response.json())
  //         .then(data => console.log(data));
  // // empty dependency array means this effect will only run once (like componentDidMount in classes)
  // }, []);

  for (let i = 0; i < props.messageArray.length - 1; i++) {}

  //   fetchData();
  return <>props.messageArray</>;
};

function fetchData() {
  fetch('https://ohwuvawrw4.execute-api.us-west-2.amazonaws.com/messages')
    .then((data) => data.json())
    .then((data) => displayMessages(data));
}

function displayMessages(data) {
  sessionStorage.setItem('lastMsgTs', data[0].created_at);

  let batchLength = 500;
  if (data.length < batchLength) batchLength = data.length;

  for (let i = batchLength - 1; i >= 0; i--) {
    let messageDiv;
    if (data[i].created_by === sessionStorage.user)
      messageDiv = createMessageDiv('user');
    else messageDiv = createMessageDiv();

    messageDiv.querySelector('#messageName').innerHTML = data[i].created_by;
    messageDiv.querySelector('#messageText').innerHTML = data[i].message;
  }
}

export default Message;
