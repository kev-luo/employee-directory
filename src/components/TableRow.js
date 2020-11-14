import React, { useState, useEffect, useRef } from 'react'
import { Table, Ref } from 'semantic-ui-react'
import _ from 'lodash';
import { getUsers } from '../utils/API';


export default function TableRow() {

  const [people, setPeople] = useState([]);
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
    <Table sortable celled fixed>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell
          >
            Profile Pic
          </Table.HeaderCell>
            <Table.HeaderCell
              onClick={sortColumn}
            >
              Name
            </Table.HeaderCell>
          <Table.HeaderCell
          >
            Location
          </Table.HeaderCell>
          <Ref innerRef={columnRef}>
            <Table.HeaderCell
              onClick={sortColumn}
            >
              Email
            </Table.HeaderCell>
          </Ref>
          <Table.HeaderCell
          >
            Gender
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {isLoading || people.map(person => (
          <Table.Row key={person.cell}>
            <Table.Cell><img src={person.picture.thumbnail} alt={person.name.first} /></Table.Cell>
            <Table.Cell>{person.name.first} {person.name.last}</Table.Cell>
            <Table.Cell>{person.location.city}, {person.location.state} - {person.location.country}</Table.Cell>
            <Table.Cell>{person.email}</Table.Cell>
            <Table.Cell>{person.gender}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}
