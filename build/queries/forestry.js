"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.forestry = void 0;

var _types = require("../types");

var _graphql = require("graphql");

const forestry = {
  type: _types.ForestryType,
  args: {
    id: {
      type: _graphql.GraphQLInt
    }
  },
  resolve: (parent, args) => (parent, args)
};
exports.forestry = forestry;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9xdWVyaWVzL2ZvcmVzdHJ5LmpzIl0sIm5hbWVzIjpbImZvcmVzdHJ5IiwidHlwZSIsIkZvcmVzdHJ5VHlwZSIsImFyZ3MiLCJpZCIsIkdyYXBoUUxJbnQiLCJyZXNvbHZlIiwicGFyZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBR08sTUFBTUEsUUFBUSxHQUFHO0FBQ3RCQyxFQUFBQSxJQUFJLEVBQUVDLG1CQURnQjtBQUV0QkMsRUFBQUEsSUFBSSxFQUFFO0FBQ0pDLElBQUFBLEVBQUUsRUFBRTtBQUFFSCxNQUFBQSxJQUFJLEVBQUVJO0FBQVI7QUFEQSxHQUZnQjtBQUt0QkMsRUFBQUEsT0FBTyxFQUFFLENBQUNDLE1BQUQsRUFBU0osSUFBVCxNQUFtQkksTUFBTSxFQUFFSixJQUEzQjtBQUxhLENBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9yZXN0cnlUeXBlIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBHcmFwaFFMT2JqZWN0VHlwZSwgR3JhcGhRTFN0cmluZywgR3JhcGhRTEZsb2F0LCBHcmFwaFFMTGlzdCwgZ3JhcGhxbCwgR3JhcGhRTEludCwgR3JhcGhRTE5vbk51bGwsIEdyYXBoUUxJRCB9IGZyb20gXCJncmFwaHFsXCI7XG5cblxuZXhwb3J0IGNvbnN0IGZvcmVzdHJ5ID0ge1xuICB0eXBlOiBGb3Jlc3RyeVR5cGUsXG4gIGFyZ3M6IHtcbiAgICBpZDogeyB0eXBlOiBHcmFwaFFMSW50IH1cbiAgfSxcbiAgcmVzb2x2ZTogKHBhcmVudCwgYXJncykgPT4gKHBhcmVudCwgYXJncylcbn07Il19