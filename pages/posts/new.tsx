import React from 'react';
import styled from 'styled-components';
import Router from 'next/router';
import { Grid, Typography } from '@material-ui/core';
import Page from '../../components/pages/Page';
import AddPostForm from '../../components/forms/AddPostForm';

const CreatePostPage: React.FC = () => {
  return (
    <Page>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={12} md={8} lg={6}>
          <FormTitle>Create new post ✍️</FormTitle>
          <AddPostForm onSubmit={() => Router.push('/')} />
        </Grid>
      </Grid>
    </Page>
  );
};

const FormTitle = styled(Typography)`
  text-align: center;
  font-size: 36px;
  font-weight: bold;
`;

export default CreatePostPage;
