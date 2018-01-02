//import _ from 'lodash';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from '../../data/formFields';

class SurveyForm extends Component {
  renderFeilds() {
    return formFields.map(({label, name}) => {
      return <Field key={name} component={SurveyField} label={label} name={name} type="text" />
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFeilds()}
          <button
            className="btn right white-text"
            type="submit"
          >
            Next
            <i className="material-icons right">arrow_forward</i>
          </button>
          <Link
            className="btn yellow darken-3 left white-text"
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

  errors.recipients = validateEmails(values.recipients || '');

  formFields.forEach(({ name, emptyError }) => {
    if (! values[name]) {
      errors[name] = emptyError;
    }
  });

  return errors;
};

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm);