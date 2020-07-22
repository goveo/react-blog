import React, { useCallback } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { addComment } from '../../store/actions/postsActions';
import Form from './Form';

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
  const onFormSubmit = useCallback(
    ({ comment }) => {
      addComment({ body: comment, postId });
      if (onSubmit) onSubmit();
    },
    [addComment, onSubmit, postId],
  );

  return <Form stringFields={['comment']} hideErrors onSubmit={onFormSubmit} />;
};

export default connector(AddCommentForm);
