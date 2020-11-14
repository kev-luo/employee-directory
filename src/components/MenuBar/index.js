import React from 'react'
import './MenuBar.css';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

export default function MenuBar() {
  return (
    <AppBar color="primary" position="relative">
      <Toolbar>
        <Typography color="inherit" variant='h6'>Employee Search</Typography>
      </Toolbar>
    </AppBar>
  )
}
