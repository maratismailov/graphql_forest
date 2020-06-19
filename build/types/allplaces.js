"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AllplacesType = void 0;

var _graphql = require("graphql");

var _pg = require("pg");

const conString = 'postgres://postgres:@192.168.20.78/forest_bd';
const pool = new _pg.Pool({
  connectionString: conString
});
const site_list = new _graphql.GraphQLObjectType({
  name: "site_list",
  fields: () => ({
    id: {
      type: _graphql.GraphQLString
    },
    name: {
      type: _graphql.GraphQLString
    }
  })
});
const AllplacesType = new _graphql.GraphQLObjectType({
  name: "Allplaces",
  fields: {
    sites: {
      type: new _graphql.GraphQLList(site_list),
      resolve: () => getSites()
    }
  }
}); // { id: '1518203', name: 'Terenozek' },
// { id: '607551', name: 'Zhetibay' },
// { id: '1537162', name: 'Almaty Oblysy' },
// { id: '1512449', name: 'Uychi' },
// { id: '610686', name: 'Aqzhayyq' },
// { id: '1217007', name: 'Koson' },
// { id: '1519844', name: 'Rūdnīchnyy' },

exports.AllplacesType = AllplacesType;

const getSites = () => {
  return new Promise((resolve, reject) => {
    pool.connect(function (err, client, done) {
      if (err) {
        return console.error('error fetching client from pool', err);
      }

      client.query('SELECT name, id FROM cacip.sites', function (err, result) {
        done();

        if (err) {
          return reject(console.error('error happened during query', err));
        }

        resolve(result.rows);
      });
    });
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy9hbGxwbGFjZXMuanMiXSwibmFtZXMiOlsiY29uU3RyaW5nIiwicG9vbCIsIlBvb2wiLCJjb25uZWN0aW9uU3RyaW5nIiwic2l0ZV9saXN0IiwiR3JhcGhRTE9iamVjdFR5cGUiLCJuYW1lIiwiZmllbGRzIiwiaWQiLCJ0eXBlIiwiR3JhcGhRTFN0cmluZyIsIkFsbHBsYWNlc1R5cGUiLCJzaXRlcyIsIkdyYXBoUUxMaXN0IiwicmVzb2x2ZSIsImdldFNpdGVzIiwiUHJvbWlzZSIsInJlamVjdCIsImNvbm5lY3QiLCJlcnIiLCJjbGllbnQiLCJkb25lIiwiY29uc29sZSIsImVycm9yIiwicXVlcnkiLCJyZXN1bHQiLCJyb3dzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUEsTUFBTUEsU0FBUyxHQUFHLDhDQUFsQjtBQUNBLE1BQU1DLElBQUksR0FBRyxJQUFJQyxRQUFKLENBQVM7QUFDcEJDLEVBQUFBLGdCQUFnQixFQUFFSDtBQURFLENBQVQsQ0FBYjtBQUlBLE1BQU1JLFNBQVMsR0FBRyxJQUFJQywwQkFBSixDQUFzQjtBQUN0Q0MsRUFBQUEsSUFBSSxFQUFFLFdBRGdDO0FBRXRDQyxFQUFBQSxNQUFNLEVBQUUsT0FBTztBQUNiQyxJQUFBQSxFQUFFLEVBQUU7QUFBRUMsTUFBQUEsSUFBSSxFQUFFQztBQUFSLEtBRFM7QUFFYkosSUFBQUEsSUFBSSxFQUFFO0FBQUVHLE1BQUFBLElBQUksRUFBRUM7QUFBUjtBQUZPLEdBQVA7QUFGOEIsQ0FBdEIsQ0FBbEI7QUFRTyxNQUFNQyxhQUFhLEdBQUcsSUFBSU4sMEJBQUosQ0FBc0I7QUFDakRDLEVBQUFBLElBQUksRUFBRSxXQUQyQztBQUVqREMsRUFBQUEsTUFBTSxFQUFFO0FBQ05LLElBQUFBLEtBQUssRUFBRTtBQUNMSCxNQUFBQSxJQUFJLEVBQUUsSUFBSUksb0JBQUosQ0FBZ0JULFNBQWhCLENBREQ7QUFFTFUsTUFBQUEsT0FBTyxFQUFFLE1BQU1DLFFBQVE7QUFGbEI7QUFERDtBQUZ5QyxDQUF0QixDQUF0QixDLENBVVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFLQSxNQUFNQSxRQUFRLEdBQUcsTUFBTTtBQUNyQixTQUFPLElBQUlDLE9BQUosQ0FBWSxDQUFDRixPQUFELEVBQVVHLE1BQVYsS0FBcUI7QUFDdENoQixJQUFBQSxJQUFJLENBQUNpQixPQUFMLENBQWEsVUFBVUMsR0FBVixFQUFlQyxNQUFmLEVBQXVCQyxJQUF2QixFQUE2QjtBQUN4QyxVQUFJRixHQUFKLEVBQVM7QUFDUCxlQUFPRyxPQUFPLENBQUNDLEtBQVIsQ0FBYyxpQ0FBZCxFQUFpREosR0FBakQsQ0FBUDtBQUNEOztBQUNEQyxNQUFBQSxNQUFNLENBQUNJLEtBQVAsQ0FBYSxrQ0FBYixFQUFpRCxVQUFVTCxHQUFWLEVBQWVNLE1BQWYsRUFBdUI7QUFDdEVKLFFBQUFBLElBQUk7O0FBQ0osWUFBSUYsR0FBSixFQUFTO0FBQ1AsaUJBQU9GLE1BQU0sQ0FBQ0ssT0FBTyxDQUFDQyxLQUFSLENBQWMsNkJBQWQsRUFBNkNKLEdBQTdDLENBQUQsQ0FBYjtBQUNEOztBQUNETCxRQUFBQSxPQUFPLENBQUNXLE1BQU0sQ0FBQ0MsSUFBUixDQUFQO0FBQ0QsT0FORDtBQU9ELEtBWEQ7QUFZRCxHQWJNLENBQVA7QUFlRCxDQWhCRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdyYXBoUUxPYmplY3RUeXBlLCBHcmFwaFFMU3RyaW5nLCBHcmFwaFFMRmxvYXQsIEdyYXBoUUxMaXN0IH0gZnJvbSBcImdyYXBocWxcIjtcbmltcG9ydCB7IFBvb2wgfSBmcm9tICdwZydcblxuY29uc3QgY29uU3RyaW5nID0gJ3Bvc3RncmVzOi8vcG9zdGdyZXM6QDE5Mi4xNjguMjAuNzgvZm9yZXN0X2JkJ1xuY29uc3QgcG9vbCA9IG5ldyBQb29sKHtcbiAgY29ubmVjdGlvblN0cmluZzogY29uU3RyaW5nXG59KTtcblxuY29uc3Qgc2l0ZV9saXN0ID0gbmV3IEdyYXBoUUxPYmplY3RUeXBlKHtcbiAgbmFtZTogXCJzaXRlX2xpc3RcIixcbiAgZmllbGRzOiAoKSA9PiAoe1xuICAgIGlkOiB7IHR5cGU6IEdyYXBoUUxTdHJpbmcgfSxcbiAgICBuYW1lOiB7IHR5cGU6IEdyYXBoUUxTdHJpbmcgfVxuICB9KVxufSk7XG5cbmV4cG9ydCBjb25zdCBBbGxwbGFjZXNUeXBlID0gbmV3IEdyYXBoUUxPYmplY3RUeXBlKHtcbiAgbmFtZTogXCJBbGxwbGFjZXNcIixcbiAgZmllbGRzOiB7XG4gICAgc2l0ZXM6IHtcbiAgICAgIHR5cGU6IG5ldyBHcmFwaFFMTGlzdChzaXRlX2xpc3QpLFxuICAgICAgcmVzb2x2ZTogKCkgPT4gZ2V0U2l0ZXMoKVxuICAgIH1cbiAgfVxufSk7XG5cbi8vIHsgaWQ6ICcxNTE4MjAzJywgbmFtZTogJ1RlcmVub3playcgfSxcbi8vIHsgaWQ6ICc2MDc1NTEnLCBuYW1lOiAnWmhldGliYXknIH0sXG4vLyB7IGlkOiAnMTUzNzE2MicsIG5hbWU6ICdBbG1hdHkgT2JseXN5JyB9LFxuLy8geyBpZDogJzE1MTI0NDknLCBuYW1lOiAnVXljaGknIH0sXG4vLyB7IGlkOiAnNjEwNjg2JywgbmFtZTogJ0FxemhheXlxJyB9LFxuLy8geyBpZDogJzEyMTcwMDcnLCBuYW1lOiAnS29zb24nIH0sXG4vLyB7IGlkOiAnMTUxOTg0NCcsIG5hbWU6ICdSxatkbsSrY2hueXknIH0sXG5cblxuXG5cbmNvbnN0IGdldFNpdGVzID0gKCkgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHBvb2wuY29ubmVjdChmdW5jdGlvbiAoZXJyLCBjbGllbnQsIGRvbmUpIHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ2Vycm9yIGZldGNoaW5nIGNsaWVudCBmcm9tIHBvb2wnLCBlcnIpXG4gICAgICB9XG4gICAgICBjbGllbnQucXVlcnkoJ1NFTEVDVCBuYW1lLCBpZCBGUk9NIGNhY2lwLnNpdGVzJywgZnVuY3Rpb24gKGVyciwgcmVzdWx0KSB7XG4gICAgICAgIGRvbmUoKVxuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdChjb25zb2xlLmVycm9yKCdlcnJvciBoYXBwZW5lZCBkdXJpbmcgcXVlcnknLCBlcnIpKVxuICAgICAgICB9XG4gICAgICAgIHJlc29sdmUocmVzdWx0LnJvd3MpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbiAgKVxufVxuIl19