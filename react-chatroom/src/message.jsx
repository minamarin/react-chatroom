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
  //   return <>props.messageArray</>;
  return (
    <div className='message-container'>
      <Containers box={props.messageArray} fetchData={fetchData} />
    </div>
  );
};

function fetchData() {
  fetch('https://ohwuvawrw4.execute-api.us-west-2.amazonaws.com/messages')
    .then((data) => data.json())
    .then((data) => displayMessages(data));
}

// function createChatArea() {
//   const body = document.querySelector('body');

//   const chatArea = document.createElement('div');
//   body.appendChild(chatArea);
//   chatArea.setAttribute('id', 'chatArea');
//   chatArea.style.border = '1px solid black';
//   chatArea.style.height = '600px';
//   chatArea.style.width = '1300px';
//   chatArea.style.margin = 'auto';
//   chatArea.style.backgroundColor = '#F4EDEA';
//   chatArea.style.overflowY = 'scroll';

//   const userInputWrapper = document.createElement('div');
//   body.appendChild(userInputWrapper);
//   userInputWrapper.style.width = '1300px';
//   userInputWrapper.style.margin = 'auto';

//   // every time a user enter text into textInputField, the text is saved in the textInputField.value property
//   const textInputField = document.createElement('input');
//   userInputWrapper.appendChild(textInputField);
//   textInputField.setAttribute('id', 'textField');
//   textInputField.setAttribute('type', 'text');
//   textInputField.setAttribute('placeholder', 'Type a message');
//   textInputField.style.width = '1200px';

//   const button = document.createElement('input');
//   userInputWrapper.appendChild(button);
//   button.setAttribute('id', 'button');
//   button.setAttribute('type', 'submit');
//   button.style.width = '100px';
// }

// function createMessageDiv(arg) {
//   const message = document.createElement('div');
//   document.querySelector('#chatArea').appendChild(message);
//   message.style.border = '1px solid grey';
//   message.style.width = '600px';
//   message.style.padding = '5px';
//   message.scrollIntoView(false);

//   if (arguments.length === 0) {
//     message.style.backgroundColor = '#F4D1AE';
//     message.style.margin = '10px auto 10px 50px';
//   } else {
//     message.style.backgroundColor = '#F7EF99';
//     message.style.margin = '10px 50px 10px auto';
//   }

//   const name = document.createElement('p');
//   message.appendChild(name);
//   name.setAttribute('id', 'messageName');
//   name.style.fontWeight = 'bold';
//   name.style.margin = '0px';

//   const text = document.createElement('p');
//   message.appendChild(text);
//   text.setAttribute('id', 'messageText');
//   text.style.margin = '0px';

//   return message;
// }

// function displayMessages(data) {
//   sessionStorage.setItem('lastMsgTs', data[0].created_at);

//   let batchLength = 500;
//   if (data.length < batchLength) batchLength = data.length;

//   for (let i = batchLength - 1; i >= 0; i--) {
//     let messageDiv;
//     if (data[i].created_by === sessionStorage.user)
//       messageDiv = createMessageDiv('user');
//     else messageDiv = createMessageDiv();

//     messageDiv.querySelector('#messageName').innerHTML = data[i].created_by;
//     messageDiv.querySelector('#messageText').innerHTML = data[i].message;
//   }
// }

// function postMessage() {
//   const textField = document.querySelector('#textField');
//   fetch('https://ohwuvawrw4.execute-api.us-west-2.amazonaws.com/messages', {
//     method: 'POST',
//     body: JSON.stringify({
//       message: textField.value,
//       created_by: sessionStorage.user,
//     }),
//   });

//   const messageDiv = createMessageDiv('user');
//   messageDiv.querySelector('#messageName').innerHTML = sessionStorage.user;
//   messageDiv.querySelector('#messageText').innerHTML = textField.value;
// }

export default Message;
