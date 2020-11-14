import React, { useState, useEffect } from 'react'
import _ from 'lodash';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@material-ui/core';
import { getUsers } from '../utils/API';

export default function TableRows() {

  const [people, setPeople] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
    setCategories([
      {name: 'Image', isSorted: false}, 
      {name: 'First Name', isSorted: false},
      {name: 'Last Name', isSorted: false}, 
      {name: 'Age', isSorted: false}, 
      {name: 'City', isSorted: false},
      {name: 'Country', isSorted: false}, 
      {name: 'Email', isSorted: false},
    ])
  },[])

  const sortColumn = (column, isSorted) => {
    if (isSorted) {
      setPeople(_.orderBy(people, column.split(' ').join('').toLowerCase(), ['desc']));
    } else {
      setPeople(_.orderBy(people, column.split(' ').join('').toLowerCase(), ['asc']));
    }
    setCategories(categories.map(category => {
      if (category.name === column) {
        let adjCategory = {...category, isSorted: !category.isSorted}
        return adjCategory;
      }
      return category;
    }))
  }

  return (
    <TableContainer component={ Paper }>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            {isLoading || categories.map(({name, isSorted}) => {
              return name === 'Image' ? (
                <TableCell key={name}>{name}</TableCell>
              ) : (
                <TableCell key={name} onClick={() => sortColumn(name, isSorted)}>{name}</TableCell>
              )
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {isLoading || people.map(person => {
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
