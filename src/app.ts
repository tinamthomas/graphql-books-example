import * as express from "express";
import * as graphqlHTTP from "express-graphql";
import routes from "./routes";
import graphQLSchema from './schema';
const app = express();

routes.forEach((route) => app[route.method](route.path, route.handler));

app.use("/graphql", graphqlHTTP({
    graphiql: true,
    schema: graphQLSchema,
}));
// tslint:disable-next-line:no-console
app.listen(3000, () => console.log("Example app listening on port 3000!"));
