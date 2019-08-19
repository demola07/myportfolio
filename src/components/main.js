import React from "react";
import Landing from "./Landing";
import { Switch, Route } from "react-router-dom";
import Aboutme from "./Aboutme";
import Projects from "./Projects";
import Resume from "./Resume";
import Contact from "./Contact";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/aboutme" component={Aboutme} />
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />
    <Route path="/contact" component={Contact} />
  </Switch>
);

export default Main;
