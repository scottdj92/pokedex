import { GraphQLServer } from "graphql-yoga";
import signale from "signale";
import { getPokemon } from "poke-api";

const typeDefs = `
    type Query {
        getPokemon(name: String!): Pokemon
    }

    type Pokemon {
        id: Int
        name: String
        height: Int
        moves: [PokemonMove]
        sprites: PokemonSprites
        stats: [PokemonStat]
        types: [PokemonType]
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
`;

const resolvers = {
    Query: {
        getPokemon: (_, { name }) => getPokemon(name).then((result) => result),
    },
};

const server = new GraphQLServer({ typeDefs, resolvers });
server.start( () => signale.info("server is running on localhost:4000"));
