import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import formFields from '../../data/formFields';
import { submitSurvey } from '../../actions';

const SurveyFormReview = ({ onReviewCancel, values, submitSurvey, history }) => {
  const reviewFields = formFields.map(({name, label}) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{values[name]}</div>
      </div>
    );
  });

  return (
    <div>
      <h5>SurveyFormReview</h5>
      <div>
        {reviewFields}
      </div>
      <button
        className="btn yellow darken-3 left white-text"
        onClick={onReviewCancel}
        type="button"
      >
        <i className="material-icons left">arrow_back</i>
        Back
      </button>
      <button
        className="btn right white-text"
        onClick={() => submitSurvey(values, history)}
        type="button"
      >
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  values: state.form.surveyForm.values
});

// const mapDispatchToProps = dispatch => ({
//   submitSurvey: values => dispatch(submitSurvey(values))
// });

export default connect(mapStateToProps, { submitSurvey })(withRouter(SurveyFormReview));