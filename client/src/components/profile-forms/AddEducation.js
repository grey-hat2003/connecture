import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addEducation } from '../../actions/profile';

const AddEducation = ({ addEducation, history }) => {
  const [formData, setFormData] = useState({
    school: '',
    stream: '',
    from: '',
    to: '',
    current: false,
    description: ''
  });

  const {
    school,
    stream,
    from,
    to,
    description,
    current
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <h1 className = "large text-primary">Add Your Education</h1>
    
      <small>* = required field</small>
      <form
        className = "form"
        onSubmit = {e => {
          e.preventDefault();
          addEducation(formData, history);
        }}
      >
        <div className = "form-group">
          <input
            type = "text"
            placeholder = "* Educational Institute's Name"
            name = "school"
            value = {school}
            onChange = {onChange}
            required
          />
        </div>
        <div className = "form-group">
          <input
            type = "text"
            placeholder = "* Stream"
            name = "stream"
            value = {stream}
            onChange = {onChange}
            required
          />
        </div>
       
        <div className = "form-group">
          <h4>From Date</h4>
          <input type = "date" name = "from" value = {from} onChange = {onChange} />
        </div>
        <div className = "form-group">
          <p>
            <input
              type = "checkbox"
              name = "current"
              checked = {current}
              value = {current}
              onChange = {() => setFormData({ ...formData, current: !current })}
            />{' '}
            Current School
          </p>
        </div>
        <div className = "form-group">
          <h4>To Date</h4>
          <input
            type = "date"
            name = "to"
            value = {to}
            onChange = {onChange}
            disabled = {current}
          />
        </div>
        <div className = "form-group">
          <textarea
            name = "description"
            cols = "30"
            rows = "3"
            placeholder = "Program Description"
            value = {description}
            onChange = {onChange}
          />
        </div>
        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="/dashboard">
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired
};

export default connect(null, { addEducation })(AddEducation);
