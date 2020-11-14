import React from 'react'
import { TableContainer, Table, Paper } from '@material-ui/core';

import TableHeader from '../TableHeader';
import TableRows from '../TableRows';
import './TableWrapper.css';

export default function TableWrapper() {
  return (
    <Paper className="root">
      <TableContainer className="container">
        <Table stickyHeader>
          <TableHeader />
          <TableRows />
        </Table>
      </TableContainer>
    </Paper>
  )
}
