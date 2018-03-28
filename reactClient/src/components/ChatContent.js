import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Message } from './index';

class ChatContent extends Component {
  renderChat() {
    const data = this.props.messages;
    return data.map((message, key) => {
      const text = message.messages.messageContent;
      const messageKey = message.messages.key;
      if (this.props.myKey === messageKey) {
        return (
          <Message 
            key={key} 
            text={text}
            messageAlign='' 
            sendBy={'Me'}
          />
        );
      }
      return (
        <Message 
          key={key} 
          text={text} 
          messageAlign='align-right' 
          sendBy={messageKey}
        />
      );
    });
  }
  renderFooter() {
    if (this.props.typingFlag) {
      return (
        <div>someone is typing</div>        
      );
    }
    return <div />;
  }
  render() {
    return (
      <div className="chat-content">
        {this.renderChat()}
        {this.renderFooter()}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    messages: state.message.messages,
    myKey: state.message.key,
    typingFlag: state.message.typingFlag
  };
};
export default connect(mapStateToProps)(ChatContent);
