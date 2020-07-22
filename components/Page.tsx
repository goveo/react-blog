import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Navbar from './Navbar';
import { Container, Grid } from '@material-ui/core';
import Loader from './Loader';

interface Props {
  title?: string;
  description?: string;
  loading?: boolean;
}

const Page: React.FC<Props> = ({ title = 'React-blog', description = 'Develops Today test', loading, children }) => {
  const router = useRouter();
  const [routerLoading, setRouterLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url: string) => url !== router.pathname && setRouterLoading(true);
    const handleComplete = (url: string) => url === router.pathname && setRouterLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  });
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Navbar />
      {(loading || routerLoading) && <Loader />}
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
