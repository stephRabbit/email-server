//import _ from 'lodash';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';

const FIELDS = [
  { label: 'Survey Title', name: 'title', emptyError: 'Please provide a title!' },
  { label: 'Subject Line', name: 'subject', emptyError: 'Must provide a subject!' },
  { label: 'Email Body', name: 'body', emptyError: 'Must provide email content!' },
  { label: 'Recipients List', name: 'emails', emptyError: 'Must provide emails!' }
];

class SurveyForm extends Component {
  renderFeilds() {
    return FIELDS.map(({label, name}) => {
      return <Field key={name} component={SurveyField} label={label} name={name} type="text" />
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFeilds()}
          <button
            className="btn right white-text"
            type="submit"
          >
            Next
            <i className="material-icons right">arrow_forward</i>
          </button>
          <Link
            className="btn left  white-text"
            to="/surveys"
          >
            Cancel
            <i className="material-icons right">close</i>
          </Link>
        </form>
      </div>
    );
  }
};

// Values from reduxForm
const validate = values => {
  const errors = {};

  errors.emails = validateEmails(values.emails || '');

  FIELDS.forEach(({ name, emptyError }) => {
    if (! values[name]) {
      errors[name] = emptyError;
    }
  });

  return errors;
};

export default reduxForm({
  validate,
  form: 'surveyForm'
})(SurveyForm);