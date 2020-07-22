import React from 'react';
import { Typography, List } from '@material-ui/core';
import styled from 'styled-components';

interface Props {
  comments: {
    id: number;
    body: string;
  }[];
}

const CommentsList: React.FC<Props> = ({ comments }) => {
  return (
    <>
      <CommentsTitle>Comments:</CommentsTitle>
      {comments && comments.length > 0 && (
        <StyledList aria-label="comments">
          {comments.map((comment) => (
            <CommentsText key={comment.id.toString()}>{comment.body}</CommentsText>
          ))}
        </StyledList>
      )}
    </>
  );
};

const CommentsTitle = styled(Typography)`
  font-size: 28px;
  font-weight: bold;
`;

const CommentsText = styled(Typography)`
  font-size: 16px;
  word-wrap: break-word;
  margin: 5px 0;
`;

const StyledList = styled(List)`
  padding: 0;
  margin: 0;
`;

export default CommentsList;
