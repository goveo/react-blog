import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const Navbar: React.FC = () => {
  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <Typography color="inherit" variant="h6" component="h1">
          React-blog
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
