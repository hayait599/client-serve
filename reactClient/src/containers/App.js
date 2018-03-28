import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomePage, ChattingPage } from './index';
import { receiverMessage, typingState } from './../actions/index';

class App extends Component {
  
  componentDidMount() {
    this.props.receiverMessage();
    this.props.typingState();
  }
  
  render() {
    return (
      <BrowserRouter >
          <Switch>
            <Route path="/chattingRoom" component={ChattingPage} />
            <Route path="/" component={HomePage} />
          </Switch>
      </BrowserRouter>
    );
  }
}
export default connect(null, { receiverMessage, typingState })(App);
