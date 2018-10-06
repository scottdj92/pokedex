import React from "react";
import { render } from "react-dom";
import { Grid, globalStyle, Typography } from "@smooth-ui/core-em";
import { injectGlobal } from "react-emotion";

const App: React.SFC = () => (
    <Grid>
        {injectGlobal`${globalStyle}`}
        <Typography variant="display-4">Generation 1 Pokèdex</Typography>
    </Grid>
);

render(<App/>, document.getElementById("app"));
