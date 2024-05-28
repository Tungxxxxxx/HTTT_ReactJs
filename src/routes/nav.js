import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Home from "../views/Home";
import Login from "../views/Login";
import Menu from "../views/Menu";

function Nav() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            {/* Sử dụng NavLink thay vì Link */}
            <li>
              <NavLink to="/" exact activeClassName="active">
                Trang chủ
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" activeClassName="active">
                Logout
              </NavLink>
            </li>
            <li>
              <NavLink to="/menu" activeClassName="active">
                Menu
              </NavLink>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/menu" component={Menu} />
      </div>
    </Router>
  );
}
export default Nav;
