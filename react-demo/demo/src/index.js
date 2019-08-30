import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

class Hello extends React.Component {
  render() {
    return (
      <div class="firstComponent">
        <h2>Hello World </h2>
        <button class="btn">Click Me</button>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div class="header">
        <div class="brand">
          <h1>Logo</h1>
        </div>
        <nav>
          <ul class="navbar">
            <li>
              {" "}
              <a href="index.html">Home</a>
            </li>
            <li>
              {" "}
              <a href="index.html">About</a>
            </li>
            <li>
              {" "}
              <a href="index.html">Services</a>
            </li>
            <li>
              {" "}
              <a href="index.html">Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

ReactDOM.render(<Header />, document.getElementById("header"));
ReactDOM.render(<Hello />, document.getElementById("root"));
ReactDOM.render(<Hello />, document.getElementById("good"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
