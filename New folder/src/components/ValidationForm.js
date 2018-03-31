import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
//import { addPost } from './../actions/index';

class ValidationForm extends Component {

  onSubmit(values) {
    //pass value key to saga
    console.log(values);
    this.props.history.push('/chattingRoom');
  }

  renderField(field) {
    const showError = field.meta.error && field.meta.touched;
    const formClass = `form-group ${showError ? 'has-danger' : ''}`;
    return (
      <div className={formClass}>
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
    errors.key = 'Please enter the key';
  } 
  return errors;
};
export default reduxForm({
  validate,
  form: 'ValidationForm'
})(ValidationForm);
