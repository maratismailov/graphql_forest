"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _graphql = require("graphql");

var queries = _interopRequireWildcard(require("./queries"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = new _graphql.GraphQLSchema({
  query: new _graphql.GraphQLObjectType({
    name: "Query",
    fields: { ...queries
    }
  })
});

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zY2hlbWEuanMiXSwibmFtZXMiOlsiR3JhcGhRTFNjaGVtYSIsInF1ZXJ5IiwiR3JhcGhRTE9iamVjdFR5cGUiLCJuYW1lIiwiZmllbGRzIiwicXVlcmllcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7ZUFFZSxJQUFJQSxzQkFBSixDQUFrQjtBQUMvQkMsRUFBQUEsS0FBSyxFQUFFLElBQUlDLDBCQUFKLENBQXNCO0FBQzNCQyxJQUFBQSxJQUFJLEVBQUUsT0FEcUI7QUFFM0JDLElBQUFBLE1BQU0sRUFBRSxFQUNOLEdBQUdDO0FBREc7QUFGbUIsR0FBdEI7QUFEd0IsQ0FBbEIsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdyYXBoUUxTY2hlbWEsIEdyYXBoUUxPYmplY3RUeXBlIH0gZnJvbSBcImdyYXBocWxcIjtcbmltcG9ydCAqIGFzIHF1ZXJpZXMgZnJvbSBcIi4vcXVlcmllc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgR3JhcGhRTFNjaGVtYSh7XG4gIHF1ZXJ5OiBuZXcgR3JhcGhRTE9iamVjdFR5cGUoe1xuICAgIG5hbWU6IFwiUXVlcnlcIixcbiAgICBmaWVsZHM6IHtcbiAgICAgIC4uLnF1ZXJpZXNcbiAgICB9XG4gIH0pXG59KTsiXX0=