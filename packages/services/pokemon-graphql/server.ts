import { GraphQLServer } from "graphql-yoga";
import signale from "signale";
import { getPokemon, getPokemonGeneration } from "poke-api";
import { Pokemon, GameGeneration } from "pokemon-models";

const typeDefs = `
    type Query {
        getPokemon(name: String!): Pokemon
        getPokemonGeneration(name: String!): GameGeneration
    }

    type GameGeneration {
        id: Int
        main_region: GameGenerationRegion
        name: String
        pokemon_species: [GameGenerationPokemon]
    }

    type GameGenerationRegion {
        name: String
    }

    type GameGenerationPokemon {
        name: String
    }

    type Pokemon {
        id: Int
        name: String
        height: Int
        weight: Int
        moves: [PokemonMove]
        sprites: PokemonSprites
        stats: [PokemonStat]
        types: [PokemonType]
        abilities: [PokemonAbility]
    }

    type PokemonMove {
        move: PokemonDetailData
    }

    type PokemonDetailData {
        name: String
    }

    type PokemonSprites {
        back_default: String
        back_shiny: String
        front_default: String
        front_shiny: String
    }

    type PokemonStat {
        base_stat: Int
        stat: PokemonDetailData
    }

    type PokemonType {
        slot: Int
        type: PokemonDetailData
    }

    type PokemonAbility {
        ability: PokemonDetailData
        is_hidden: Boolean
        slot: Int
    }
`;

const resolvers = {
    GameGeneration: {
        pokemon_species: (parent: GameGeneration) => parent.pokemon_species.sort((a, b) => a.name < b.name ? -1 : 1),
    },
    Pokemon: {
        abilities: (parent: Pokemon) => parent.abilities.sort((item) => item.slot),
    },
    Query: {
        getPokemon: (_, { name }) => getPokemon(name).then((result) => result),
        getPokemonGeneration: (_, { name }) => getPokemonGeneration(name).then((result) => result),
    },
};

const server = new GraphQLServer({ typeDefs, resolvers });
server.start( () => signale.info("server is running on localhost:4000"));
