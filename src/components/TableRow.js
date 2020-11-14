import React, { useState, useEffect } from 'react'
import { Table } from 'semantic-ui-react'
import { getUsers } from '../utils/API';


export default function TableRow() {

  const [people, setPeople] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function searchApi() {
    let { data: { results: users } } = await getUsers.searchPeople();
    setPeople(users);
    console.log(users);
    setIsLoading(false);
  }

  useEffect(() => {
    searchApi();
  },[])

  return (
    <Table sortable celled fixed>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell
          >
            Name
          </Table.HeaderCell>
          <Table.HeaderCell
          >
            Age
          </Table.HeaderCell>
          <Table.HeaderCell
          >
            Gender
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {isLoading || people.map(person => (
          <Table.Row key={person.cell}>
            <Table.Cell>{person.name.first}</Table.Cell>
            <Table.Cell>{person.email}</Table.Cell>
            <Table.Cell>{person.gender}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}
