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
    }

    type PokemonMove {
        move: PokemonMoveData
    }

    type PokemonMoveData {
        name: String
    }
`;

const resolvers = {
    Query: {
        getPokemon: (_, { name }) => getPokemon(name).then((result) => result),
    },
};

const server = new GraphQLServer({ typeDefs, resolvers });
server.start( () => signale.info("server is running on localhost:4000"));
