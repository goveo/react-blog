import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Container, Grid, Typography, Link } from '@material-ui/core';
import Navbar from '../Navbar';
import Loader from '../Loader';
import { mediaWidth } from '../../lib/media/mediaWidth';

export interface PageProps {
  title?: string;
  description?: string;
  loading?: boolean;
  error?: string;
  showHomeLink?: boolean;
}

export const Page: React.FC<PageProps> = ({
  title = 'React-blog',
  description = 'Develops Today test',
  loading,
  error,
  showHomeLink = true, // works only on error pages
  children,
}) => {
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
          <Content>
            {!loading && !error && <>{children}</>}
            {!loading && error && (
              <ErrorContainer>
                <ErrorTitle>{error}</ErrorTitle>
                <>{children}</>
                {showHomeLink && (
                  <NextLink href="/">
                    <Link>
                      <ErrorLinkText>Back to Home</ErrorLinkText>
                    </Link>
                  </NextLink>
                )}
              </ErrorContainer>
            )}
          </Content>
        </Grid>
      </Grid>
    </>
  );
};

const Content = styled(Container)`
  margin-top: 24px;

  ${mediaWidth.s} {
    margin-top: 48px;
  }
`;

const ErrorContainer = styled.div`
  text-align: center;
`;

const ErrorTitle = styled(Typography)`
  font-size: 36px;
  font-weight: bold;
`;

const ErrorLinkText = styled(Typography)`
  font-size: 16px;
`;

export default Page;
