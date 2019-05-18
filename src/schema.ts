import {GraphQLInt, GraphQLObjectType, GraphQLSchema, GraphQLString} from "graphql";
import {authors} from "./services/authors";

const AuthorType = new GraphQLObjectType({
    description: "...",
    fields: () => ({
        name: {
            type: GraphQLString,
        },
    }),
    name: "Author",
});

const graphQLSchema = new GraphQLSchema({
    query: new GraphQLObjectType({
        description: "...",
        fields: () => ({
            author: {
                args: {
                    id: {
                        type: GraphQLInt,
                    },
                },
                resolve: async (root, args) => await authors(args.id),
                type: AuthorType,
            },
        }),
        name: "Query",
    }),
});

export default graphQLSchema;
