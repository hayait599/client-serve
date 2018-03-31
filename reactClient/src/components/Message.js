import React from 'react';

const Message = (props) => {
  return (
    <div className="message-content"> 
      <div>{props.text}</div>
    </div>
  );
};

export default Message;
