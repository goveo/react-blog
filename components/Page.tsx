import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Navbar from './Navbar';
import { Container, Grid } from '@material-ui/core';

interface Props {
  title?: string;
  description?: string;
}

const Page: React.FC<Props> = ({ title = 'React-blog', description = 'Develops Today test', children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Navbar />
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={12} sm={9} md={8} lg={6}>
          <Content>{children}</Content>
        </Grid>
      </Grid>
    </>
  );
};

const Content = styled(Container)`
  margin-top: 30px;
`;

export default Page;
