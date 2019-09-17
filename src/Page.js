import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Single from "./components/App";
import Multi from "./multiPlay/App";

function Page() {
  return (
      <Router>
          <Route path="/single/:id" component={Single}/>
          <Route path="/multi/:id" component={Multi}/>
      </Router>
  );
}

export default Page;
