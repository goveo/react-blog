import React, { useCallback } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import styled, { css } from 'styled-components';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TextField, Button } from '@material-ui/core';
import { addPost } from '../../store/actions/postsActions';
import Router from 'next/router';

const connector = connect(null, { addPost });

const AddPostForm: React.FC<ConnectedProps<typeof connector>> = ({ addPost }) => {
  const initialValues = { title: '', body: '' };

  const onSubmit = useCallback(
    (postPayload) => {
      addPost(postPayload);
      Router.push('/');
    },
    [addPost],
  );

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
              Add new post
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

export default connector(AddPostForm);
