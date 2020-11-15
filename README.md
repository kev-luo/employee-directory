
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



## License
Licensed under the [MIT](https://opensource.org/licenses/MIT) License.

## Tests
    npm run test

## Questions
* [kvn.luo@gmail.com](kvn.luo@gmail.com)
