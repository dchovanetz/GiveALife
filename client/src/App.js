import React from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Home from "./components/home/Home";
import AboutUs from "./components/about-us/AboutUs";
import GetInvolved from "./components/get-involved/GetInvolved";
import Community from "./components/community/Community";
import Donate from "./components/donate/Donate";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/get-involved" component={GetInvolved} />
        <Route path="/community" component={Community} />
        <Route path="/donate" component={Donate} />
      </Switch>
      
//     </Router>
  );
}

export default App;
