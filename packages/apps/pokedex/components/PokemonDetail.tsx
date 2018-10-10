import React from "react";
import gql from "graphql-tag";
import { ChildDataProps, graphql } from "react-apollo";
import {
    PokemonDetailQueryVariables,
    PokemonDetailQuery,
} from "models/schema/PokemonDetailQuery";
import PokemonProfile from "./PokemonProfile";
import PokemonAbilities from "./PokemonAbilities";
import PokemonMoves from "./PokemonMoves";
import { RouteComponentProps, Router } from "@reach/router";
import RouterQuery from "models/RouterQuery";

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
            moves {
                move {
                    name
                }
            }
        }
    }
`;

// tslint:disable-next-line:max-line-length
type PokemonDetailType = ChildDataProps<RouteComponentProps<RouterQuery>, PokemonDetailQuery, PokemonDetailQueryVariables>;
const PokemonDetail: React.SFC<PokemonDetailType> = ({
    data: {
        loading,
        error,
        getPokemon,
    },
    name,
}) => {
    if (loading || error) {
        return null;
    }

    return (
        <>
            <PokemonProfile {...getPokemon}/>
            <PokemonAbilities abilities={getPokemon.abilities}/>
            <PokemonMoves moves={getPokemon.moves}/>
        </>
    );
};

// tslint:disable-next-line:max-line-length
const withPokemonDetail = graphql<RouteComponentProps<RouterQuery>, PokemonDetailQuery, PokemonDetailQueryVariables>(PokemonDetailQuery, {
    options: ({ name }) => ({ variables: { name }}),
    props: ({ data }) => ({
        data,
    }),
});

export default withPokemonDetail(PokemonDetail);
