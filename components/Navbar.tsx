import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles, Button, Grid } from '@material-ui/core';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  appBar: theme.mixins.toolbar,
  grow: {
    flexGrow: 1,
  },
}));

export interface NavbarProps {
  title?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ title = 'React blog' }) => {
  const classes = useStyles();

  return (
    <AppBar position="sticky" color="primary" className={classes.appBar}>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={12} sm={9} md={8} lg={6}>
          <Toolbar>
            <Typography color="inherit">{title}</Typography>
            <div className={classes.grow} />
            <Link href="/">
              <Button color="inherit">Home</Button>
            </Link>
          </Toolbar>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Navbar;
