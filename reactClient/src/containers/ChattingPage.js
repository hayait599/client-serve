import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ChatContent, ChatInput } from './../components/index';
//import { Link } from 'react-router-dom';

class ChattingPage extends Component {

  render() {
    return (
      <div className="content">
        <div className="chat-container">
          <ChatContent />
          <ChatInput />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    data: state.posts
  };
};
export default connect(mapStateToProps, {})(ChattingPage);
