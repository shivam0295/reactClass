import React from "react";
import ReactDOM from "react-dom";
ReactDOM.render(
  <div>
    <h1>My favourate Food</h1>
    <ul>
      <li>Coffee</li>
      <li>Tea</li>
      <li>Milk</li>
    </ul>
  </div>,
  document.getElementById("root")
);

/* //direct import
import React from "react";
import ReactDOM from "react-dom";

//var React = require("react");
//var ReactDOM=require("react-dom");
//using React
ReactDOM.render(
  <div>
    <h1>Hello World</h1>
    <p>This Is Paragraph</p>
  </div>,
  document.getElementById("root")
);

//pure js methord
var h1 = document.createElement("h1");
h1.innerHTML = "hello world";
document.getElementById("root").appendChild(h1);
 */
