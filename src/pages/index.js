import React from 'react'
import TableData from '../components/TableData';
import Appbar from '../components/Appbar';
import Search from '../components/Search';
import { PeopleProvider } from '../utils/PeopleContext';

export default function MainPage() {

  return (
    <PeopleProvider>
      <Appbar />
      <Search />
      <TableData />
    </PeopleProvider>
  )
}
