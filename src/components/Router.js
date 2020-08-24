import React from "react";
import { Switch, Route } from "react-router-dom";
import App from "../App";
import Recipe from "./Recipe";

const ReactRouter = () => (
    <Switch>
        <Route exact path="/" component={App} />
        <Route path="/recipe" component={Recipe} />
    </Switch>
);
export default ReactRouter;
