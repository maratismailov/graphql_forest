import { ForestryType } from "../types";

export const forestry = {
  type: ForestryType,
  resolve: (obj, args) => ({args})
  // resolve: (obj, args, context, info) => {
  //   console.log(args); // { id: 1 }
  // }
};