import React from 'react';
import styled from 'styled-components';
import { AppBar, Toolbar, Typography, Button, Grid } from '@material-ui/core';
import Link from 'next/link';

export interface NavbarProps {
  title?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ title = 'React blog' }) => {
  return (
    <AppBar position="sticky" color="primary">
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={12} sm={9} md={8} lg={6}>
          <Toolbar>
            <NavbarTitle color="inherit">{title}</NavbarTitle>
            <FlexGrow />
            <Link href="/">
              <Button color="inherit">Home</Button>
            </Link>
          </Toolbar>
        </Grid>
      </Grid>
    </AppBar>
  );
};

const FlexGrow = styled.div`
  flex-grow: 1;
`;

const NavbarTitle = styled(Typography)`
  font-weight: bold;
  font-size: 20px;
`;

export default Navbar;
