import React from 'react'
import './MenuBar.css';
import { AppBar, Toolbar, Typography, Paper } from '@material-ui/core';
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

function MenuBar() {
  const classes = useStyles();
  return (
    <Paper elevation={0} className={classes.root}>
      <AppBar position="relative" className={classes.appbar}>
        <Toolbar>
          <Typography color="inherit" variant='h6'>Employee Search</Typography>
        </Toolbar>
      </AppBar>
    </Paper>
  )
}

export default MenuBar;
