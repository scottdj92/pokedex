import { GraphQLServer } from "graphql-yoga";
import signale from "signale";

const typeDefs = `
    type Query {
        hello(name: String!): String
    }
`;

const resolvers = {
    Query: {
        hello: (_, { name }) => `Hello, ${name}`,
    },
};

const server = new GraphQLServer({ typeDefs, resolvers });
server.start( () => signale.info("server is running on localhost:4000"));
