"use strict";

var _express = _interopRequireDefault(require("express"));

var _expressGraphql = _interopRequireDefault(require("express-graphql"));

var _schema = _interopRequireDefault(require("./schema"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
const port = process.env.PORT || 8080;
app.use("/", (0, _expressGraphql.default)({
  schema: _schema.default,
  graphiql: process.env.NODE_ENV !== "production"
}));
app.listen(8181, () => {
  console.log(`GraphQL API listening on http://localhost:${port}/`);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJhcHAiLCJwb3J0IiwicHJvY2VzcyIsImVudiIsIlBPUlQiLCJ1c2UiLCJzY2hlbWEiLCJncmFwaGlxbCIsIk5PREVfRU5WIiwibGlzdGVuIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7OztBQUVBLE1BQU1BLEdBQUcsR0FBRyx1QkFBWjtBQUNBLE1BQU1DLElBQUksR0FBR0MsT0FBTyxDQUFDQyxHQUFSLENBQVlDLElBQVosSUFBb0IsSUFBakM7QUFFQUosR0FBRyxDQUFDSyxHQUFKLENBQVEsR0FBUixFQUFhLDZCQUFRO0FBQ2pCQyxFQUFBQSxNQUFNLEVBQU5BLGVBRGlCO0FBRWpCQyxFQUFBQSxRQUFRLEVBQUVMLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSyxRQUFaLEtBQXlCO0FBRmxCLENBQVIsQ0FBYjtBQUtBUixHQUFHLENBQUNTLE1BQUosQ0FBVyxJQUFYLEVBQWlCLE1BQU07QUFDbkJDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFhLDZDQUE0Q1YsSUFBSyxHQUE5RDtBQUNILENBRkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IGdyYXBocWwgZnJvbSBcImV4cHJlc3MtZ3JhcGhxbFwiO1xuaW1wb3J0IHNjaGVtYSBmcm9tIFwiLi9zY2hlbWFcIjtcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgODA4MDtcblxuYXBwLnVzZShcIi9cIiwgZ3JhcGhxbCh7XG4gICAgc2NoZW1hLFxuICAgIGdyYXBoaXFsOiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCJcbn0pKTtcblxuYXBwLmxpc3Rlbig4MTgxLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coYEdyYXBoUUwgQVBJIGxpc3RlbmluZyBvbiBodHRwOi8vbG9jYWxob3N0OiR7cG9ydH0vYCk7XG59KTsiXX0=