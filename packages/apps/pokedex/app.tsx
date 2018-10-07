import React from "react";
import { render } from "react-dom";
import { Grid, globalStyle, Typography, Row, Col } from "@smooth-ui/core-em";
import { injectGlobal } from "react-emotion";
import { ApolloProvider } from "react-apollo";
import { PokemonDetail, PokemonList } from "./components";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: "http://localhost:4000/",
    }),
});

const App: React.SFC = () => (
    <ApolloProvider client={client}>
        <Grid>
            {injectGlobal`${globalStyle}`}
            <Typography variant="display-4">Generation 1 Pokèdex</Typography>
            <Row>
                <Col xs={3}>
                    <PokemonList/>
                </Col>
                <Col>
                    <PokemonDetail/>
                </Col>
            </Row>
        </Grid>
    </ApolloProvider>
);

render(<App/>, document.getElementById("app"));
