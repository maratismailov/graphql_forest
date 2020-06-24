import express from "express";
import graphql from "express-graphql";
import schema from "./schema";
const cors = require('cors')

const app = express();
const port = process.env.PORT || 8080;

app.use(cors())

app.use("/", graphql({
    schema,
    graphiql: process.env.NODE_ENV !== "production"
}));

app.listen(port, () => {
    console.log(`GraphQL API listening on http://localhost:${port}/`);
});