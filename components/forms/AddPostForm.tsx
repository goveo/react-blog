import React, { useCallback } from 'react';
import styled, { css } from 'styled-components';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TextField, Button } from '@material-ui/core';

const AddPostForm: React.FC = () => {
  const initialValues = { title: '', body: '' };

  const onSubmit = useCallback(async (values) => {
    alert(JSON.stringify(values, null, 2));
  }, []);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={Yup.object().shape({
        title: Yup.string().required('Field is required'),
        body: Yup.string().required('Field is required'),
      })}
    >
      {(props) => {
        const { values, touched, errors, dirty, isSubmitting, isValid, handleChange, handleBlur, handleSubmit } = props;
        return (
          <Form onSubmit={handleSubmit}>
            <FormInput
              id="title"
              label="Title"
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
              error={Boolean(errors.title && touched.title)}
              helperText={touched.title && errors.title}
            />
            <FormInput
              id="body"
              label="Body"
              value={values.body}
              multiline
              onChange={handleChange}
              onBlur={handleBlur}
              error={Boolean(errors.body && touched.body)}
              helperText={touched.body && errors.body}
            />
            <SubmitButton
              variant="outlined"
              type="submit"
              color="primary"
              disabled={!(isValid && dirty) || isSubmitting}
            >
              Add new task
            </SubmitButton>
          </Form>
        );
      }}
    </Formik>
  );
};

const formElement = css`
  width: 100%;
  margin-top: 20px;
`;

const FormInput = styled(TextField)`
  ${formElement}
`;

const SubmitButton = styled(Button)`
  ${formElement}
`;

export default AddPostForm;
