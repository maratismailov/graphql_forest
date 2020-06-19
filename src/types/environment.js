import { GraphQLObjectType, GraphQLString, GraphQLFloat } from "graphql";

export const EnvironmentType = new GraphQLObjectType({
  name: "Environment",

  fields: {
    arch: {
      type: GraphQLString,
      resolve: () => process.arch
    },

    platform: {
      type: GraphQLString,
      resolve: () => process.platform
    },

    uptime: {
      type: GraphQLFloat,
      resolve: () => process.uptime()
    }
  }
});