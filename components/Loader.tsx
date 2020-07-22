import React from 'react';
import { LinearProgress, CircularProgress } from '@material-ui/core';

type LoaderType = 'circular' | 'linear';

export interface LoaderProps {
  type?: LoaderType;
  size?: number;
  thickness?: number;
}

export const Loader: React.FC<LoaderProps> = ({ type = 'bar', size = 100, thickness = 3 }) => {
  if (type === 'bar') {
    return <LinearProgress />;
  }
  return <CircularProgress size={size} thickness={thickness} />;
};

export default Loader;
