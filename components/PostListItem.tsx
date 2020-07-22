import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { ListItem, ListItemText, Card, CardContent, Typography } from '@material-ui/core';
import { mediaWidth } from '../lib/media/mediaWidth';

interface Props {
  title: string;
  id: number;
}

const PostsListItem: React.FC<Props> = ({ title, id, ...restProps }) => {
  return (
    <Link href={'posts/[postId]'} as={`posts/${id}`}>
      <Card variant="outlined" {...restProps}>
        <ListItem button>
          <ListItemText
            primary={
              <>
                <CardContent>
                  <PostTitle>{title}</PostTitle>
                  <PostId>ID: {id}</PostId>
                </CardContent>
              </>
            }
          />
        </ListItem>
      </Card>
    </Link>
  );
};

const PostTitle = styled(Typography)`
  line-height: 90%;
  margin: 24px auto;

  font-weight: bold;
  font-size: 32px;

  ${mediaWidth.s} {
    font-size: 40px;
  }

  ${mediaWidth.m} {
    font-size: 48px;
  }

  ${mediaWidth.l} {
    font-size: 56px;
  }
`;

const PostId = styled(Typography)`
  font-weight: 300;
  font-size: 14px;
`;

export default PostsListItem;
