import React from "react";
import { render } from "react-dom";

const App: React.SFC = () => (
    <h1>hello world</h1>
);

render(<App/>, document.getElementById("app"));
