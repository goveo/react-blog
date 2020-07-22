import React, { useCallback } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { addPost } from '../../store/actions/postsActions';
import Form from './Form';

const connector = connect(null, { addPost });

export interface AddPostFormProps {
  onSubmit?: () => void;
}

const AddPostForm: React.FC<AddPostFormProps & ConnectedProps<typeof connector>> = ({ onSubmit, addPost }) => {
  const onFormSubmit = useCallback(
    (payload) => {
      addPost(payload);
      onSubmit();
    },
    [addPost, onSubmit],
  );
  return <Form stringFields={['title', 'body']} onSubmit={onFormSubmit} />;
};

export default connector(AddPostForm);
