import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import ReactRouter from "./components/Router";

ReactDOM.render(
    <Router basename="/recipe_finder/">
        <Suspense
            fallback={
                <div className="text-center m-5 text-uppercase">Loading...</div>
            }>
            <ReactRouter />
        </Suspense>
    </Router>,
    document.getElementById("root")
);
