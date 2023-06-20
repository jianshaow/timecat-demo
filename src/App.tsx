import './App.css';
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Replay from "./components/Replay";
import Record from './components/Record';

function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/record">Record</Link>
        </li>
        <li>
          <Link to="/replay">Replay</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/record/*" element={ <Record /> }></Route>
        <Route path="/replay" element={ <Replay /> }></Route>
      </Routes>
    </Router>
  );
}

export default App;
