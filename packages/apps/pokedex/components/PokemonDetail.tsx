import React from "react";
import gql from "graphql-tag";
import { ChildDataProps, graphql } from "react-apollo";
import { Typography } from "@smooth-ui/core-em";
import {
    PokemonDetailQueryVariables,
    PokemonDetailQuery,
} from "models/schema/PokemonDetailQuery";
import PokemonProfile from "./PokemonProfile";
import PokemonAbilities from "./PokemonAbilities";

const PokemonDetailQuery = gql`
    query PokemonDetailQuery($name: String!) {
        getPokemon(name: $name) {
            id
            name
            height
            weight
            abilities {
                ability {
                    name
                }
                slot
                is_hidden
            }
            stats {
                stat {
                    name
                }
            }
            types {
                slot
                type {
                    name
                }
            }
            sprites {
                front_default
            }
        }
    }
`;

type PokemonDetailType = ChildDataProps<{}, PokemonDetailQuery, PokemonDetailQueryVariables>;
const PokemonDetail: React.SFC<PokemonDetailType> = ({
    data: {
        loading,
        error,
        getPokemon,
}}) => {
    if (loading || error) {
        return null;
    }
    console.log(getPokemon);

    return (
        <>
            <PokemonProfile {...getPokemon}/>
            <PokemonAbilities abilities={getPokemon.abilities}/>
        </>
    );
};

const withPokemonDetail = graphql<{}, PokemonDetailQuery, PokemonDetailQueryVariables>(PokemonDetailQuery, {
    options: ({}) => ({ variables: { name: "bulbasaur" }}),
    props: ({ data }) => ({
        data,
    }),
});

export default withPokemonDetail(PokemonDetail);
