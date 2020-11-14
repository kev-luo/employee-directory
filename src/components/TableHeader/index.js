import React from 'react';
import { TableHead, TableRow, TableCell } from '@material-ui/core';

import { usePeople } from '../../utils/PeopleContext';
import './TableHeader.css';

export default function TableHeader() {
  const { isLoading, categories, sortColumn } = usePeople();

  return (
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
  )
}
