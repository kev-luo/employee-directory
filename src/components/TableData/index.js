import React from 'react'
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@material-ui/core';
import { usePeople } from '../../utils/PeopleContext';
import './Table.css';

export default function TableData() {

  const { searchResults, categories, isLoading, sortColumn } = usePeople();

  return (
    <TableContainer component={ Paper }>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            {isLoading || categories.map(({name, isSorted}) => {
              return name === 'Image' ? (
                <TableCell key={name}>{name}</TableCell>
              ) : (
                <TableCell className="clickable" key={name} onClick={() => sortColumn(name, isSorted)}>{name}</TableCell>
              )
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {isLoading || searchResults.map(person => {
            return (
              <TableRow key={person.id}>
                <TableCell><img src={person.image} alt={person.firstname} /></TableCell>
                <TableCell>{person.firstname}</TableCell>
                <TableCell>{person.lastname}</TableCell>
                <TableCell>{person.age}</TableCell>
                <TableCell>{person.city}</TableCell>
                <TableCell>{person.country}</TableCell>
                <TableCell>{person.email}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
