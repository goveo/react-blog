import React, { useCallback } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import styled, { css } from 'styled-components';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TextField, Button } from '@material-ui/core';
import { addComment } from '../../store/actions/postsActions';

const connector = connect(null, { addComment });

export interface AddCommentFormProps {
  onSubmit?: () => void;
  postId: number;
}

const AddCommentForm: React.FC<AddCommentFormProps & ConnectedProps<typeof connector>> = ({
  onSubmit,
  postId,
  addComment,
}) => {
  const initialValues = { comment: '' };

  const onFormSubmit = useCallback(
    ({ comment }, { resetForm }) => {
      addComment({ body: comment, postId });
      resetForm();
      if (onSubmit) onSubmit();
    },
    [addComment, onSubmit, postId],
  );

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onFormSubmit}
      validationSchema={Yup.object().shape({
        comment: Yup.string().required('Field is required'),
      })}
    >
      {(props) => {
        const { values, dirty, isSubmitting, isValid, handleChange, handleBlur, handleSubmit } = props;
        return (
          <Form onSubmit={handleSubmit}>
            <FormInput
              id="comment"
              placeholder="Comment"
              value={values.comment}
              onChange={handleChange}
              onBlur={handleBlur}
              multiline
            />
            <SubmitButton
              variant="outlined"
              type="submit"
              color="primary"
              disabled={!(isValid && dirty) || isSubmitting}
            >
              Add comment
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

export default connector(AddCommentForm);
