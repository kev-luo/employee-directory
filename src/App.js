import 'semantic-ui-css/semantic.min.css';
import './App.css';
import TableRow from './components/TableRow';
import TableRows from './components/TableRows';
import MenuBar from './components/MenuBar';
import { PeopleProvider } from './utils/PeopleContext';

function App() {
  return (
    <>
    {/* <TableRows /> */}
      <MenuBar />
      <TableRow />
    </>
  );
}

export default App;
