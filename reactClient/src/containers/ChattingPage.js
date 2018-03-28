import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ChatContent, ChatInput } from './../components/index';

class ChattingPage extends Component {

  render() {
    return (
      <div className="chat-container">
        <div className="header">
          <div className="header-logo">
            <i className="material-icons md-48" style={{ color: '#ffffff' }} >
              mode comment
              </i>
            <h6 className="heafer-text">Chatting Room</h6>
          </div>
        </div>
        <ChatContent />
        <ChatInput />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    data: state.posts
  };
};
export default connect(mapStateToProps, {})(ChattingPage);
