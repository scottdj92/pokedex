import React from "react";
import { render } from "react-dom";
import { Grid, globalStyle, Typography } from "@smooth-ui/core-em";
import { injectGlobal } from "react-emotion";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({ uri: "http://localhost:4000" });

const App: React.SFC = () => (
    <ApolloProvider client={client}>
        <Grid>
            {injectGlobal`${globalStyle}`}
            <Typography variant="display-4">Generation 1 Pokèdex</Typography>
        </Grid>
    </ApolloProvider>
);

render(<App/>, document.getElementById("app"));
