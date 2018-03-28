import React from 'react';

const Message = (props) => {

  const messageAlign = props.messageAlign ? props.messageAlign : '';
  const name = `message-content ${messageAlign}`;
  
  return (
    <div className={name}> 
      <label>{props.sendBy}</label>
      <div>{props.text}</div>
    </div>
  );
};
export default Message;
