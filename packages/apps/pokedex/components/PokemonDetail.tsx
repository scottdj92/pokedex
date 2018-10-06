import React from "react";
import gql from "graphql-tag";
import { ChildDataProps, graphql } from "react-apollo";
import { Typography } from "@smooth-ui/core-em";
import {
    PokemonDetailQueryVariables,
    PokemonDetailQuery,
} from "models/schema/PokemonDetailQuery";

const PokemonDetailQuery = gql`
    query PokemonDetailQuery($name: String!) {
        getPokemon(name: $name) {
            name
            height
        }
    }
`;

type PokemonDetailType = ChildDataProps<{}, PokemonDetailQuery, PokemonDetailQueryVariables>;
const PokemonDetail: React.SFC<PokemonDetailType> = ({
    data: {
        loading,
        error,
        getPokemon: {
            height,
            name,
        },
}}) => {
    if (loading || error) {
        return null;
    }

    return (
        <>
            <Typography variant="h2">{name}</Typography>
        </>
    );
};

const withPokemonDetail = graphql<{}, PokemonDetailQuery, PokemonDetailQueryVariables>(PokemonDetailQuery, {
    options: () => ({ variables: { name: "bulbasaur" }}),
    props: ({ data }) => ({
        data,
    }),
});

export default withPokemonDetail(PokemonDetail);
