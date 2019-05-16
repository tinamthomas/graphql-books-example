import {GraphQLInt, GraphQLObjectType, GraphQLSchema, GraphQLString} from "graphql";

const AuthorType = new GraphQLObjectType({
    description: "...",
    fields: () => ({
        name: {
            type: GraphQLString,
        },
    }),
    name: "Author",
});

const graphqlSchema = new GraphQLSchema({
    query: new GraphQLObjectType({
        description: "...",
        fields: () => ({
            author: {
                args: {
                    id: {
                        type: GraphQLInt,
                    },
                },
                type: AuthorType,
            },
        }),
        name: "Query",
    }),
});

export default graphqlSchema;
