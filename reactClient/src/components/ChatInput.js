import React, { Component } from 'react';
import { connect } from 'react-redux';
import { storeMessage, storeInput } from './../actions/index';

class ChatInput extends Component {
  
  onSubmit(event) {
    event.preventDefault(); 
    this.props.storeMessage(this.props.textInput);
  }
  onChange(event) {
    this.props.storeInput(event.target.value);
  }
  render() {
    return (
      <form className="form" onSubmit={this.onSubmit.bind(this)}>
        <textarea
          className="chatInput"
          rows="4" 
          onChange={this.onChange.bind(this)}
          value={this.props.textInput}
        />
        <input type="submit" value="Send" className="btn btn-info" />
      </form>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    textInput: state.message.text
  };
};
export default connect(mapStateToProps, { storeMessage, storeInput })(ChatInput);
