import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Components from "./Components";
import "./App.css";
import { useState } from "react";

export const App = () => {
  const [currentTab, setCurrentTab] = useState("");
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <ul className="App-nav">
            <li className={currentTab === "Home" ? "active" : ""}>
              <Link to="/" onClick={() => setCurrentTab("Home")}>
                Home
              </Link>
            </li>
            {Components.map((component) => (
              <li
                key={component.name}
                className={currentTab === component.name ? "active" : ""}
              >
                <Link
                  to={component.routeProps.path}
                  onClick={() => setCurrentTab(component.name)}
                >
                  {component.name}
                </Link>
              </li>
            ))}
          </ul>
        </header>
        <div className="App-content">
          {Components.map((component) => (
            <Route {...component.routeProps} key={component.name} />
          ))}
          <Route exact path="/" key="Home">
            <div>Choose component</div>
          </Route>
        </div>
      </div>
    </Router>
  );
};
