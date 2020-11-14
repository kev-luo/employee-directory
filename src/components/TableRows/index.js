import React from 'react';
import { TableBody, TableRow, TableCell } from '@material-ui/core';

import { usePeople } from '../../utils/PeopleContext';
import './TableRows.css';

export default function TableRows() {
  const { searchResults, isLoading } = usePeople();

  return (
    <TableBody>
      {isLoading ? (
        <TableRow>
          <TableCell>Loading...</TableCell>
          <TableCell>Loading...</TableCell>
          <TableCell>Loading...</TableCell>
          <TableCell>Loading...</TableCell>
          <TableCell>Loading...</TableCell>
          <TableCell>Loading...</TableCell>
          <TableCell>Loading...</TableCell>
        </TableRow>
      ) : (
        searchResults.map(person => {
          return (
            <TableRow className="styledRow" key={person.id}>
              <TableCell><img src={person.image} alt={person.firstname} /></TableCell>
              <TableCell>{person.firstname}</TableCell>
              <TableCell>{person.lastname}</TableCell>
              <TableCell>{person.age}</TableCell>
              <TableCell>{person.city}</TableCell>
              <TableCell>{person.country}</TableCell>
              <TableCell>{person.email}</TableCell>
            </TableRow>
          )
        })
      )}
    </TableBody>
  )
}
