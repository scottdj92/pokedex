import React from "react";
import gql from "graphql-tag";
import { ChildDataProps, graphql } from "react-apollo";
import { Typography } from "@smooth-ui/core-em";

const PokemonDetailQuery = gql`
    query PokemonDetailQuery($name: String!) {
        getPokemon(name: $name) {
            name
            height
        }
    }
`;

const PokemonDetail: React.SFC<ChildDataProps<any>> = ({ data: { loading, error }}) => {
    if (loading || error) {
        return null;
    }

    return (
        <>
            <Typography variant="h2">Pokemon detail</Typography>
        </>
    );
};

const withPokemonDetail = graphql<{}, {}, {}>(PokemonDetailQuery, {
    props: ({ data }) => ({
        data,
    }),
});

export default withPokemonDetail(PokemonDetail);
