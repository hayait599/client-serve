import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ValidationForm } from './../components/index';
//import { Link } from 'react-router-dom';

class HomePage extends Component {

  render() {
    return (
      <div className="content">
        <div className="card">
          <div className="title">
            <h2>Chatting Room</h2>
          </div>
          <ValidationForm history={this.props.history} />
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
export default connect(mapStateToProps, {})(HomePage);
