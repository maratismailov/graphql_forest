import { ForestryType } from "../types";
import { GraphQLObjectType, GraphQLString, GraphQLFloat, GraphQLList, graphql, GraphQLInt, GraphQLNonNull, GraphQLID } from "graphql";


export const forestry = {
  type: ForestryType,
  args: {
    id: { type: GraphQLInt }
  },
  resolve: (parent, args) => (parent, args)
};