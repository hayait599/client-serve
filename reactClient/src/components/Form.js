import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { storeKey } from './../actions/index';

class Form extends Component {

  onSubmit(values) {
    this.props.history.push('/chattingRoom');
    this.props.storeKey(values.key);
  }
  renderField(field) {
    const showError = field.meta.error && field.meta.touched;
    const formClass = `form-group ${showError ? 'has-danger' : ''}`;
    return (
      <div className={formClass}>
        <h6> User Name </h6>
        <input
          type="text"
          className="form-control"
          {...field.input}
        />
        <div className="text-help">
          {field.meta.touched ? field.meta.error : ''}
        </div>
      </div>
    );
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <form className="form" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <p className="text-logo"> Member Login </p>
        <Field
          label="Enter Key"
          name="key"
          component={this.renderField}
        />
        <input type="submit" value="Start chatting" className="btn btn-info" />
      </form>
    );
  }
}
const validate = (values) => {
  const errors = {};
  if (!values.key) {
    errors.key = 'Please enter your name';
  }
  return errors;
};
export default reduxForm({
  validate,
  form: 'ValidationForm'
})(
  connect(null, { storeKey })(Form)
);
