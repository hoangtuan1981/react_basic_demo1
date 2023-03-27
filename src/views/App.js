//import logo from './logo.svg';
//import * as ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Routes, Route
} from "react-router-dom";
import { Outlet, Link, useRoutes, useParams } from "react-router-dom";
import './App.css';
import Nav from './Nav/Nav'
import ToDoList from './ToDo/ToDoList';
//import AddToDo from './AddToDo';
import About from './About';

/*
function App() {
  return (
    <div className="App">
      <p>
          Learning basic React
        </p>
    </div>
  );
}
*/

function App() {
  return (
    <div className="App">

      <header className="App-header">
      <Nav />
        <p>
          Learning basic React
        </p>
        <Router>
          <Routes>
            <Route path="" />
            <Route path="/todo" element={<ToDoList />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>

      </header>

    </div>

  )
}

export default App;
