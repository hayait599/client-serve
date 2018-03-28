import React from 'react';

const Message = (props) => {
  const messageAlign = props.messageAlign ? 'right-speech-bubble' : 'message-content';
  const name = props.messageAlign ? 'align-right' : 'align-left';
  console.log(name);
  return ( 
    <div className={name}>
      <div className={messageAlign}>
        <label>{props.sendBy}</label>
        <div>{props.text}</div>
      </div>
    </div>
  );
};
export default Message;
