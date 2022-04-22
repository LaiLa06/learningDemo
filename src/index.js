import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../src/assest/common/reset.scss";
import Home from "../src/pages/Home";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="content">
        <Switch>
          <Route path="/" component={Home} />
          {/* <Route path="/about" component={App} /> */}
        </Switch>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
