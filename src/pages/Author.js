// Author.js

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import '../styles/Author.css'; // Import the CSS file

function Author() {
  const navigate = useNavigate();

  const initialValues = {
    authorName: '',
  };

  const validationSchema = Yup.object().shape({
    authorName: Yup.string().required(),
  });

  const onSubmit = (data) => {
    navigate(`/quote/author/${data.authorName}`);
  };

  return (
    <div className="quote-container">
      <h1>Enter author name here</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="input-form">
          <label htmlFor="authorName">Author Name:</label>
          <ErrorMessage name="authorName" component="span" />
          <Field
            id="authorName"
            name="authorName"
            placeholder="(Ex: Thomas Edison)"
          />

          <button type="submit" className="generate-button">
            Get Quote
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default Author;

