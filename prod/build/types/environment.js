"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EnvironmentType = void 0;

var _graphql = require("graphql");

const EnvironmentType = new _graphql.GraphQLObjectType({
  name: "Environment",
  fields: {
    arch: {
      type: _graphql.GraphQLString,
      resolve: () => process.arch
    },
    platform: {
      type: _graphql.GraphQLString,
      resolve: () => process.platform
    },
    uptime: {
      type: _graphql.GraphQLFloat,
      resolve: () => process.uptime()
    }
  }
});
exports.EnvironmentType = EnvironmentType;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy9lbnZpcm9ubWVudC5qcyJdLCJuYW1lcyI6WyJFbnZpcm9ubWVudFR5cGUiLCJHcmFwaFFMT2JqZWN0VHlwZSIsIm5hbWUiLCJmaWVsZHMiLCJhcmNoIiwidHlwZSIsIkdyYXBoUUxTdHJpbmciLCJyZXNvbHZlIiwicHJvY2VzcyIsInBsYXRmb3JtIiwidXB0aW1lIiwiR3JhcGhRTEZsb2F0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRU8sTUFBTUEsZUFBZSxHQUFHLElBQUlDLDBCQUFKLENBQXNCO0FBQ25EQyxFQUFBQSxJQUFJLEVBQUUsYUFENkM7QUFHbkRDLEVBQUFBLE1BQU0sRUFBRTtBQUNOQyxJQUFBQSxJQUFJLEVBQUU7QUFDSkMsTUFBQUEsSUFBSSxFQUFFQyxzQkFERjtBQUVKQyxNQUFBQSxPQUFPLEVBQUUsTUFBTUMsT0FBTyxDQUFDSjtBQUZuQixLQURBO0FBTU5LLElBQUFBLFFBQVEsRUFBRTtBQUNSSixNQUFBQSxJQUFJLEVBQUVDLHNCQURFO0FBRVJDLE1BQUFBLE9BQU8sRUFBRSxNQUFNQyxPQUFPLENBQUNDO0FBRmYsS0FOSjtBQVdOQyxJQUFBQSxNQUFNLEVBQUU7QUFDTkwsTUFBQUEsSUFBSSxFQUFFTSxxQkFEQTtBQUVOSixNQUFBQSxPQUFPLEVBQUUsTUFBTUMsT0FBTyxDQUFDRSxNQUFSO0FBRlQ7QUFYRjtBQUgyQyxDQUF0QixDQUF4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdyYXBoUUxPYmplY3RUeXBlLCBHcmFwaFFMU3RyaW5nLCBHcmFwaFFMRmxvYXQgfSBmcm9tIFwiZ3JhcGhxbFwiO1xuXG5leHBvcnQgY29uc3QgRW52aXJvbm1lbnRUeXBlID0gbmV3IEdyYXBoUUxPYmplY3RUeXBlKHtcbiAgbmFtZTogXCJFbnZpcm9ubWVudFwiLFxuXG4gIGZpZWxkczoge1xuICAgIGFyY2g6IHtcbiAgICAgIHR5cGU6IEdyYXBoUUxTdHJpbmcsXG4gICAgICByZXNvbHZlOiAoKSA9PiBwcm9jZXNzLmFyY2hcbiAgICB9LFxuXG4gICAgcGxhdGZvcm06IHtcbiAgICAgIHR5cGU6IEdyYXBoUUxTdHJpbmcsXG4gICAgICByZXNvbHZlOiAoKSA9PiBwcm9jZXNzLnBsYXRmb3JtXG4gICAgfSxcblxuICAgIHVwdGltZToge1xuICAgICAgdHlwZTogR3JhcGhRTEZsb2F0LFxuICAgICAgcmVzb2x2ZTogKCkgPT4gcHJvY2Vzcy51cHRpbWUoKVxuICAgIH1cbiAgfVxufSk7Il19