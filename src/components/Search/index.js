import React, { useState } from 'react';
import { Paper, TextField, Grid, InputLabel, Select, MenuItem, FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { usePeople } from '../../utils/PeopleContext';

const useStyles = makeStyles({
  root: {
    margin: 16,
    padding: 16,
  },
  grid: {
    paddingRight: 16
  },
  dropdown: {
    minWidth: 120,
    marginTop: '1rem'
  }
})

function Search() {
  const [dropdown, setDropdown] = useState('');
  const { people, setSearchResults, categories, isLoading, search, setSearch } = usePeople();

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);
    let filteredPeople;
    if (dropdown === '') {
      filteredPeople = people.filter(person => {
        return person.firstname.toLowerCase().includes(searchTerm.toLowerCase());
      })
    } else {
      filteredPeople = people.filter(person => {
        let formatCat = dropdown.split(' ').join('').toLowerCase();
        let details = person[formatCat]
        return details.toLowerCase().includes(searchTerm.toLowerCase());
      })
    }
    setSearchResults(filteredPeople);
  }

  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Grid container>
        <Grid item xs={8} md={10} className={classes.grid}>
          <TextField value={search} onChange={handleSearch} placeholder={`Search...`} fullWidth />
          <FormControl className={classes.dropdown}>
            <InputLabel id="dropdown">Category</InputLabel>
            <Select
              labelId="dropdown"
              id="demo-simple-select"
              value={dropdown}
              onChange={(e) => setDropdown(e.target.value)}
            >
            {isLoading || categories.map(({ name }) => {
              if ( name !== 'Image' && name !== 'Age' ) {
                return(
                  <MenuItem key={name} value={name}>{name}</MenuItem>
                )
              }
            })}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Search