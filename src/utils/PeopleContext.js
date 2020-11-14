import React, { useState, useContext } from 'react';

import { getUsers } from './API';



const PeopleContext = React.createContext({
  people: [],
  column: '',
  direction: '',
});

const PeopleProvider = async () => {

}

const usePeopleContext = () => {
  return useContext(PeopleContext);
}

export { PeopleProvider, usePeopleContext };