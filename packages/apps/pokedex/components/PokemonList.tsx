import React from "react";
import { ChildDataProps, graphql } from "react-apollo";
import gql from "graphql-tag";
import { PokemonListQuery, PokemonListQueryVariables } from "models/schema/PokemonListQuery";
import PokemonListItem from "./PokemonListItem";

const PokemonListQuery = gql`
    query PokemonListQuery($name: String!) {
        getPokemonGeneration(name: $name) {
            name
            pokemon_species {
                name
            }
        }
    }
`;

type Props = ChildDataProps<{}, PokemonListQuery, PokemonListQueryVariables>;
const PokemonList: React.SFC<Props> = ({
    data: {
        loading,
        error,
        getPokemonGeneration,
    },
 }) => {
    if (loading || error) {
        return null;
    }

    console.log(getPokemonGeneration);

    return (
        <>
            <h1>Pokemon List</h1>
            {
                getPokemonGeneration.pokemon_species.map((pokemon) =>
                    <PokemonListItem key={pokemon.name} name={pokemon.name}/>,
                )
            }
        </>
    );
};

const withPokemonFromGeneration = graphql<{}, PokemonListQuery, PokemonListQueryVariables>(PokemonListQuery, {
    options: ({}) => ({ variables: { name: "generation-i" } }),
    props: ({ data }) => ({
        data,
    }),
});

export default withPokemonFromGeneration(PokemonList);
