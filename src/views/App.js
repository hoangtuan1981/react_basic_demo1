//import logo from './logo.svg';
//import * as ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Routes, Route
} from "react-router-dom";
//import { Outlet, Link, useRoutes, useParams } from "react-router-dom";
import './App.css';
import Nav from './Nav/Nav'
import ToDoList from './ToDo/ToDoList';
//import AddToDo from './AddToDo';
import About from './About';
import Home from './Home';
import PageNotFound from "./PageNotFound";

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

        <Router>
          <div>
            <Nav />
            <Routes>
              <Route path="/" element={<Home />} exact/>
              <Route index element={<Home />} />
              <Route path="/todo" element={<ToDoList />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>

        </Router>

      </header>

    </div>

  )
}

/* other syntax of route
<Route path="">
  <Home />
</Route>
*/

export default App;
