import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form } from './../components/index';

class HomePage extends Component {

  render() {
    return (
      <div className="content">
        <div className="home-cotent">
          <div className="left-side">
            <img
              src="./../images/logo.png"
              alt="can not be found"
              width="400"
              height="300"
              className="logoImage"
            />
          </div>
          <div className="right-side">
            <Form history={this.props.history} />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    data: state.posts
  };
};
export default connect(mapStateToProps)(HomePage);
