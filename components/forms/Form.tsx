import React, { useCallback } from 'react';
import styled, { css } from 'styled-components';
import { Formik, Form as FormikForm } from 'formik';
import * as Yup from 'yup';
import { TextField, Button } from '@material-ui/core';

export interface FormProps {
  onSubmit?: (payload: Record<string, string>) => void;
  stringFields: string[];
  hideErrors?: boolean;
  buttonText?: string;
  errorText?: string;
}

const Form: React.FC<FormProps> = ({
  stringFields,
  hideErrors = false,
  buttonText = 'Submit',
  errorText = 'Field is required',
  onSubmit,
}) => {
  const initialValues = Object.fromEntries(stringFields.map((field) => [field, '']));
  const validationSchemaShape = Object.fromEntries(
    stringFields.map((field) => [field, Yup.string().required(errorText)]),
  );

  const onSubmitFrom = useCallback(
    (payload, { resetForm }) => {
      resetForm();
      if (onSubmit) onSubmit(payload);
    },
    [onSubmit],
  );

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmitFrom}
      validationSchema={Yup.object().shape(validationSchemaShape)}
    >
      {(props) => {
        const { values, touched, errors, dirty, isSubmitting, isValid, handleChange, handleBlur, handleSubmit } = props;
        return (
          <FormikForm onSubmit={handleSubmit}>
            {Object.keys(values).map((field) => (
              <FormInput
                id={field}
                key={field}
                label={field.charAt(0).toUpperCase() + field.slice(1)}
                value={values[field]}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(!hideErrors && touched[field] && errors[field])}
                helperText={!hideErrors && touched[field] && errors[field]}
              />
            ))}

            <SubmitButton
              variant="outlined"
              type="submit"
              color="primary"
              disabled={!(isValid && dirty) || isSubmitting}
            >
              {buttonText}
            </SubmitButton>
          </FormikForm>
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

export default Form;
