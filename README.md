
# employee-directory
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![GitHub top language](https://img.shields.io/github/languages/top/kev-luo/employee-directory)

## Description
[Deployed Link](https://kev-luo.github.io/employee-directory/)

This is a single page application made with create-react-app. The application pulls dummy user data from a REST API and displays it in a table. You can choose to sort by any column besides the image column. The sorting method used was Lodash's _.orderBy() method. You can also search by any column besides image and age. If a search category is not specified, the app  defaults to searching by first name. A global store was created one level above the root level, which was passed through the context provider to child components. This app used Material UI's React framework, with some custom styles created using their Hook API. 

![demo gif](public/React%20App.gif)

## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)

## Installation
    npm install

## Usage

One of the main challenges in making this site was getting comfortable using Material UI's components and familiarizing myself with each component's props. Another issue I ran into when implementing useContext is learning that any component that calls useContext will be re-rendered anytime the context provider's state changes. This would cause massive performance issues if any consuming component required intensive calculations for each render. While useReducer fixes this by only re-rendering components that need to re-render, this application was still small enough to justify not implementing useReducer. 

Code snippet of the return statement in my context provider:
```
<PeopleContext.Provider value={{ people, categories, isLoading, sortColumn, search, setSearch, searchResults, setSearchResults }}>
  { children }
</PeopleContext.Provider>
```

## License
Licensed under the [MIT](https://opensource.org/licenses/MIT) License.

## Tests
    npm run test

## Questions
* [kvn.luo@gmail.com](kvn.luo@gmail.com)
