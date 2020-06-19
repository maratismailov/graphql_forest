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
app.listen(port, () => {
  console.log(`GraphQL API listening on http://localhost:${port}/`);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJhcHAiLCJwb3J0IiwicHJvY2VzcyIsImVudiIsIlBPUlQiLCJ1c2UiLCJzY2hlbWEiLCJncmFwaGlxbCIsIk5PREVfRU5WIiwibGlzdGVuIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7OztBQUVBLE1BQU1BLEdBQUcsR0FBRyx1QkFBWjtBQUNBLE1BQU1DLElBQUksR0FBR0MsT0FBTyxDQUFDQyxHQUFSLENBQVlDLElBQVosSUFBb0IsSUFBakM7QUFFQUosR0FBRyxDQUFDSyxHQUFKLENBQVEsR0FBUixFQUFhLDZCQUFRO0FBQ2pCQyxFQUFBQSxNQUFNLEVBQU5BLGVBRGlCO0FBRWpCQyxFQUFBQSxRQUFRLEVBQUVMLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSyxRQUFaLEtBQXlCO0FBRmxCLENBQVIsQ0FBYjtBQUtBUixHQUFHLENBQUNTLE1BQUosQ0FBV1IsSUFBWCxFQUFpQixNQUFNO0FBQ25CUyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBYSw2Q0FBNENWLElBQUssR0FBOUQ7QUFDSCxDQUZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCBncmFwaHFsIGZyb20gXCJleHByZXNzLWdyYXBocWxcIjtcbmltcG9ydCBzY2hlbWEgZnJvbSBcIi4vc2NoZW1hXCI7XG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcbmNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDgwODA7XG5cbmFwcC51c2UoXCIvXCIsIGdyYXBocWwoe1xuICAgIHNjaGVtYSxcbiAgICBncmFwaGlxbDogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiXG59KSk7XG5cbmFwcC5saXN0ZW4ocG9ydCwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGBHcmFwaFFMIEFQSSBsaXN0ZW5pbmcgb24gaHR0cDovL2xvY2FsaG9zdDoke3BvcnR9L2ApO1xufSk7Il19