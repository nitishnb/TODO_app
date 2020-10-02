import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import HomeTodo from "./components/home-todo.component";
import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";

import logo from "./logo.jpg";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
         <div class="p-3 mb-2 bg-light text-dark">  
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
          &emsp;  <Link to="/" className="navbar-brand">MERN-Stack Todo App</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/view" className="nav-link">Todos</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Todo</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/" exact component={HomeTodo} />
          <Route path="/view" exact component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
        </div>
        </div>
      </Router>
    );
  }
}

// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <div className="container">
//           <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <a class="navbar-brand" href="https://codingthesmartway.com" target="_blank">
//               <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
//             </a>
//             <Link to="/" className="navbar-brand">MERN-Stack Todo App</Link>
//             <div className="collpase navbar-collapse">
//               <ul className="navbar-nav mr-auto">
//                 <li className="navbar-item">
//                   <Link to="/" className="nav-link">Todos</Link>
//                 </li>
//                 <li className="navbar-item">
//                   <Link to="/create" className="nav-link">Create Todo</Link>
//                 </li>
//               </ul>
//             </div>
//           </nav>
//           <br/>
//           <Route path="/" exact component={TodosList} />
//           <Route path="/edit/:id" component={EditTodo} />
//           <Route path="/create" component={CreateTodo} />
//         </div>
//       </Router>
//     );
//   }
// }

export default App;