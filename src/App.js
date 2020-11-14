import './App.css';
import TableRow from './components/TableRow';
import TableRows from './components/TableRows';
import Appbar from './components/Appbar';
import Search from './components/Search';
import { PeopleProvider } from './utils/PeopleContext';

function App() {
  return (
    <>
      <Appbar />
      <Search />
      <TableRows />
      {/* <TableRow /> */}
    </>
  );
}

export default App;
