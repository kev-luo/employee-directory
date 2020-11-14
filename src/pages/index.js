import React from 'react'

import TableWrapper from '../components/TableWrapper';
import Appbar from '../components/Appbar';
import Search from '../components/Search';
import { PeopleProvider } from '../utils/PeopleContext';

export default function MainPage() {
  return (
    <PeopleProvider>
      <Appbar />
      <Search />
      <TableWrapper />
    </PeopleProvider>
  )
}
