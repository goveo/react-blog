import React from 'react';
import Page from '../../components/Page';
import AddPostForm from '../../components/forms/AddPostForm';
import { Grid, Typography } from '@material-ui/core';

const CreatePostPage: React.FC = () => {
  return (
    <Page>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={12} md={8} lg={6}>
          <Typography align="center" variant="h4" component="h1">
            Add new post
          </Typography>
          <AddPostForm />
        </Grid>
      </Grid>
    </Page>
  );
};

export default CreatePostPage;
