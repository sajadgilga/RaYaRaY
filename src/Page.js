import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import App from "./components/App";

function Page() {
  return (
      <Router>
          <Route path="/aa/:id" component={App}/>
      </Router>
  );
}

export default Page;
