import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import { Container } from '@material-ui/core';

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
      <Container>{children}</Container>
    </>
  );
};

export default Page;
