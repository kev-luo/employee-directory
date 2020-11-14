import React from 'react';
import { Paper, TextField, Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    margin: 16,
    padding: 16,
  },
  grid: {
    paddingRight: 16
  },
  button: {
    color: '#29b6f6'
  }
})

function Search() {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Grid container>
        <Grid item xs={10} md={11} className={classes.grid}>
          <TextField fullWidth/>
        </Grid>
        <Grid item xs={2} md={1}>
          <Button fullWidth variant="outlined" className={classes.button}>
          Search
          </Button>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Search