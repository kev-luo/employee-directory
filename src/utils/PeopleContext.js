import React, { useState, useContext, useEffect } from 'react';
import _ from 'lodash';

import { getUsers } from './API';

const PeopleContext = React.createContext();

export const PeopleProvider = ({ children }) => {

  const [people, setPeople] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);

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
    setSearchResults(userData);
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
      setSearchResults(_.orderBy(searchResults, column.split(' ').join('').toLowerCase(), ['desc']));
    } else {
      setSearchResults(_.orderBy(searchResults, column.split(' ').join('').toLowerCase(), ['asc']));
    }
    setCategories(categories.map(category => {
      if (category.name === column) {
        let adjCategory = {...category, isSorted: !category.isSorted}
        return adjCategory;
      }
      return category;
    }))
  }

  return(
    <PeopleContext.Provider value={{ people, setPeople, categories, isLoading, sortColumn, search, setSearch, searchResults, setSearchResults }}>
      { children }
    </PeopleContext.Provider>
  )
}

export const usePeople = () => {
  return useContext(PeopleContext);
}