import React, { useState, useEffect, useRef } from 'react'
import _ from 'lodash';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@material-ui/core';
import { getUsers } from '../utils/API';

export default function TableRows() {

  const [people, setPeople] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSorted, setIsSorted] = useState(false);

  const columnRef = useRef();

  async function searchApi() {
    let { data: { results: users } } = await getUsers.searchPeople();
    setPeople(users);
    console.log(users);
    setIsLoading(false);
  }

  useEffect(() => {
    searchApi();
  },[])

  const sortColumn = () => {
    console.log(columnRef.current.innerHTML);
    setPeople(_.sortBy(people, columnRef.current.innerHTML.toLowerCase()));
  }

  return (
    <TableContainer component={ Paper }>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Profile Pic</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isLoading || people.map(person => {
            return (
              <TableRow key={person.cell}>
                <TableCell><img src={person.picture.thumbnail} alt={person.name.first} /></TableCell>
                <TableCell>{person.name.first} {person.name.last}</TableCell>
                <TableCell>{person.dob.age}</TableCell>
                <TableCell>{person.location.city}, {person.location.state} - {person.location.country}</TableCell>
                <TableCell>{person.email}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
