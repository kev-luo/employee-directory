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
    let userData = users.map(user => {
      return {
        id: user.login.uuid,
        firstname: user.name.first,
        lastname: user.name.last,
        email: user.email,
        age: user.dob.age,
        city: user.location.city,
        state: user.location.state,
        country: user.location.country,
        image: user.picture.thumbnail,
      }
    })
    setPeople(userData);
    console.log(userData);
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
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isLoading || people.map(person => {
            return (
              <TableRow key={person.id}>
                <TableCell><img src={person.image} alt={person.firstname} /></TableCell>
                <TableCell>{person.firstname} {person.lastname}</TableCell>
                <TableCell>{person.age}</TableCell>
                <TableCell>{person.city}, {person.state} - {person.country}</TableCell>
                <TableCell>{person.email}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
