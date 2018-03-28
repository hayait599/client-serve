import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendMessage, storeInput, storeMessage, typing } from './../actions/index';

let flag = false;

class ChatInput extends Component {
  
  onSubmit(event) {
    event.preventDefault(); 
    this.props.sendMessage(this.props.textInput);
    this.props.storeInput('');
  }
  onChange(event) {
    this.props.storeInput(event.target.value);
  }
  timeoutFunction() {
    flag = false;
    this.props.typing(flag);
  }
  handleKeyUp() {
    flag = true;
    this.props.typing(flag);
    setTimeout(() => {
      this.timeoutFunction();
    }, 2000);
  }
  render() {
    return (
      <form className="form chat-form" onSubmit={this.onSubmit.bind(this)}>
        <textarea
          className="chatInput"
          rows="1" 
          onChange={this.onChange.bind(this)}
          value={this.props.textInput}
          onKeyUp={this.handleKeyUp.bind(this)}
        />
        <input type="submit" value="Send" className="btn btn-info" />
      </form>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    textInput: state.message.text
  };
};
export default connect(mapStateToProps, { 
  sendMessage, 
  storeInput, 
  storeMessage,
  typing
})(ChatInput);
