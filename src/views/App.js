//import logo from './logo.svg';
//import * as ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Routes, Route, Switch
} from "react-router-dom";
//import { Outlet, Link, useRoutes, useParams } from "react-router-dom";
import './App.css';

import ToDoList from './ToDo/ToDoList';
//import AddToDo from './AddToDo';
import About from './About';
import Home from './Home';
import Login from './Login/Login'
import PageNotFound from "./PageNotFound";
import UserList from "./User/UserList";

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

function login() {
  // check
  console.log(this.props);
  this.props.history.push("/Home");
}

function App() {
  const mode = 'login';
  return (
    <div className="App">
      <header className="App-header">

        <Router>
          <div>
            <Routes>
              <Route path="/" element={<Login mode={mode}
                onSubmit={ login } />} exact />
              <Route path="/index" element={<Login mode={mode}
                onSubmit={ login } />} />
              <Route path="/home" element={<Home />} />
              <Route path="/todo" element={<ToDoList />} />
              <Route path="/about" element={<About />} />
              <Route path="/user" element={<UserList />} />              
              <Route path="*" element={<PageNotFound />} />
              {/* <Route path="*"  lazy={() => import("./PageNotFound")}/> */}
            </Routes>
            
            
            {/* react route v5 syntax.
            <Switch>
              <Route path="/" element={<Login mode={mode}
                onSubmit={login} />} exact />
              <Route path="/index" element={<Login mode={mode}
                onSubmit={login} />} />
              <Route path="/home" element={<Home />} />
              <Route path="/todo" element={<ToDoList />} />
              <Route path="/about" element={<About />} />
              <Route path="/user" element={<UserList />} />
              <Route path="*" element={<PageNotFound />} />
            </Switch> */}

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
