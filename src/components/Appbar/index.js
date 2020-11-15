import React from 'react'
import { AppBar, Toolbar, Typography, Paper, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#fafafa',
    padding: 0,
    margin: 0,
    textAlign: 'center',
  },
  appbar: {
    alignItems: 'flex-start',
    background: 'linear-gradient(to right, #0040ff, #809fff)'
  }
})

function Appbar() {
  const classes = useStyles();
  return (
    <Paper elevation={0} className={classes.root}>
      <AppBar position="relative" className={classes.appbar}>
        <Toolbar>
          <Typography color="inherit" variant='h6'>
            <Link href='/employee-directory' color='inherit'>Employee Search</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Paper>
  )
}

export default Appbar;
