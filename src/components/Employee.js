import React, { useEffect } from 'react'
import { getUsers } from '../utils/API';

export default function Employee() {

  async function getEmployees() {
    let employees = await getUsers.searchTerms();
    console.log(employees);
  }

  useEffect(() => {
    getEmployees();
  }, [])

  return (
    <>

    </>
  )
}