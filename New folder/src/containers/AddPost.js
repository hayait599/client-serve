import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
//import { addPost } from './../actions/index';

class AddPost extends Component {

  onSubmit(values) {
    console.log(values);
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
      <form className="post-form" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Categorization"
          name="categorization"
          component={this.renderField}
        />
        <Field
          label="Categorization"
          name="Post content"
          component={this.renderField}
        />
        <input type="submit" value="Submit" className="btn btn-primary" />
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

const validate = (values) => {
  const errors = {};
  if (!values.title) {
    errors.title = 'Required';
  } 
  return errors;
};

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(AddPost);
