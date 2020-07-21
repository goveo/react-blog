import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { addPost } from '../../store/actions/postsActions';
import Page from '../../components/Page';
import AddPostForm from '../../components/forms/AddPostForm';
import { Grid, Typography } from '@material-ui/core';

const connector = connect(null, { addPost });

const CreatePostPage: React.FC<ConnectedProps<typeof connector>> = ({ addPost }) => {
  return (
    <Page>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={12} md={8} lg={6}>
          <Typography align="center" variant="h4" component="h1">
            Add new task
          </Typography>
          <AddPostForm />
        </Grid>
      </Grid>
    </Page>
  );
};

export default connector(CreatePostPage);
