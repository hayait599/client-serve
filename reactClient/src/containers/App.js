import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomePage, ChattingPage } from './index';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter >
        <div>
          <Switch>
          <Route path="/chattingRoom" component={ChattingPage} />
            <Route path="/" component={HomePage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
