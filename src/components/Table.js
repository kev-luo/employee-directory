import React from 'react'
import { Table } from 'semantic-ui-react'

export default function Table() {
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
        {data.map(({ age, gender, name }) => (
          <Table.Row key={name}>
            <Table.Cell>{name}</Table.Cell>
            <Table.Cell>{age}</Table.Cell>
            <Table.Cell>{gender}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}
