import React from 'react';
import Page from '../components/pages/Page';
import { NextPage } from 'next';

export interface ErrorPageProps {
  statusCode?: number | null;
}

export const ErrorText = {
  500: 'Internal Server Error',
  404: 'Page Not Found',
};

const textError = (statusCode: number): string => {
  return `${statusCode}. ${ErrorText[statusCode] || 'Unexpected Error'}`;
};

export const ErrorPage: NextPage<ErrorPageProps> = ({ statusCode }) => {
  return <Page error={textError(statusCode)} showHomeLink></Page>;
};

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;
