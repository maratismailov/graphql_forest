"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ForestcropType = void 0;

var _graphql = require("graphql");

var _pg = require("pg");

const conString = 'postgres://postgres:@192.168.20.78/forest_bd';
const pool = new _pg.Pool({
  connectionString: conString
}); // const oblast_list = new GraphQLObjectType({
//   name: "oblast_list",
//   fields: () => ({
//     oblast_id: { type: GraphQLString },
//     oblast_ru: { type: GraphQLString },
//     oblast_ky: { type: GraphQLString },
//     oblast_en: { type: GraphQLString },
//     geom: { type: GraphQLString },
//     leshoz_list: {
//       type: new GraphQLList(leshoz_list),
//       resolve: oblast_id => getLeshozList(oblast_id)
//     },
//   })
// });
// const leshoz_list = new GraphQLObjectType({
//   name: "leshoz_list",
//   fields: () => ({
//     leshoz_id: { type: GraphQLString },
//     leshoz_ru: { type: GraphQLString },
//     geom: { type: GraphQLString },
//     leshoztype_id: { type: GraphQLString },
//     forestries_list: {
//       type: new GraphQLList(forestries_list),
//       resolve: leshoz_id => getForestriesList(leshoz_id)
//     },
//   })
// });
// const forestries_list = new GraphQLObjectType({
//   name: "forestries_list",
//   fields: () => ({
//     gid: { type: GraphQLString },
//     geom: { type: GraphQLString },
//     forestry_ru: { type: GraphQLString },
//     forestry_num: { type: GraphQLString },
//     forestrytype_id: { type: GraphQLString },
//     block_list: {
//       type: new GraphQLList(block_list),
//       resolve: gid => getBlockList(gid)
//     },
//   })
// });
// const block_list = new GraphQLObjectType({
//   name: "block_list",
//   fields: () => ({
//     gid: { type: GraphQLString },
//     geom: { type: GraphQLString },
//     forestry_id: { type: GraphQLString },
//     block_num: { type: GraphQLString },
//     stand_list: {
//       type: new GraphQLList(stand_list),
//       resolve: gid => getStandList(gid)
//     },
//   })
// });
// const stand_list = new GraphQLObjectType({
//   name: "stand_list",
//   fields: () => ({
//     gid: { type: GraphQLString },
//     geom: { type: GraphQLString },
//     leshoz_num: { type: GraphQLString },
//     block_num: { type: GraphQLString },
//     forestry_num: { type: GraphQLString },
//     stand_code: { type: GraphQLString },
//     stand_num: { type: GraphQLString },
//   })
// });
// export const ForestcropType = new GraphQLObjectType({
//   name: "Forestcrop",
//   fields: {
//     oblasts: {
//       type: new GraphQLList(oblast_list),
//       resolve: () => getOblastList()
//     }
//   }
// });

const cropcomp_list = new _graphql.GraphQLObjectType({
  name: "cropcomp_list",
  fields: () => ({
    cropcomposition_id: {
      type: _graphql.GraphQLString
    },
    woodspecies_id: {
      type: _graphql.GraphQLString
    },
    forestcrop_id: {
      type: _graphql.GraphQLString
    },
    species_percent: {
      type: _graphql.GraphQLString
    }
  })
});
const totalcomp_list = new _graphql.GraphQLObjectType({
  name: "totalcomp_list",
  fields: () => ({
    totalcomposition_id: {
      type: _graphql.GraphQLString
    },
    woodspecies_id: {
      type: _graphql.GraphQLString
    },
    forestcrop_id: {
      type: _graphql.GraphQLString
    },
    species_percent: {
      type: _graphql.GraphQLString
    }
  })
});
const mixcomp_list = new _graphql.GraphQLObjectType({
  name: "mixcomp_list",
  fields: () => ({
    mixcomposition_id: {
      type: _graphql.GraphQLString
    },
    woodspecies_id: {
      type: _graphql.GraphQLString
    },
    forestcrop_id: {
      type: _graphql.GraphQLString
    },
    species_percent: {
      type: _graphql.GraphQLString
    }
  })
});
const forestcrops_list = new _graphql.GraphQLObjectType({
  name: "forestcrops_list",
  fields: () => ({
    forestcrop_id: {
      type: _graphql.GraphQLString
    },
    oblast_id: {
      type: _graphql.GraphQLString
    },
    leshoz_id: {
      type: _graphql.GraphQLString
    },
    forestry_id: {
      type: _graphql.GraphQLString
    },
    block_id: {
      type: _graphql.GraphQLString
    },
    stand_id: {
      type: _graphql.GraphQLString
    },
    lot_num: {
      type: _graphql.GraphQLString
    },
    leshozlotsquare: {
      type: _graphql.GraphQLString
    },
    landtype_id: {
      type: _graphql.GraphQLString
    },
    relief_id: {
      type: _graphql.GraphQLString
    },
    exposition_id: {
      type: _graphql.GraphQLString
    },
    soiltype_id: {
      type: _graphql.GraphQLString
    },
    soddegree_id: {
      type: _graphql.GraphQLString
    },
    crowndensity_id: {
      type: _graphql.GraphQLString
    },
    underbrush_id: {
      type: _graphql.GraphQLString
    },
    soilpreparation_id: {
      type: _graphql.GraphQLString
    },
    productionway_id: {
      type: _graphql.GraphQLString
    },
    prodyear: {
      type: _graphql.GraphQLString
    },
    seasontime_id: {
      type: _graphql.GraphQLString
    },
    mainwoodspecies_id: {
      type: _graphql.GraphQLString
    },
    mainprocent: {
      type: _graphql.GraphQLString
    },
    shiftlayout_id: {
      type: _graphql.GraphQLString
    },
    distanceinrow: {
      type: _graphql.GraphQLString
    },
    distancebetweenrows: {
      type: _graphql.GraphQLString
    },
    minplantingage: {
      type: _graphql.GraphQLString
    },
    maxplantingage: {
      type: _graphql.GraphQLString
    },
    sownseeds: {
      type: _graphql.GraphQLString
    },
    numofadditions: {
      type: _graphql.GraphQLString
    },
    trialsites: {
      type: _graphql.GraphQLString
    },
    laidonha: {
      type: _graphql.GraphQLString
    },
    exampercent: {
      type: _graphql.GraphQLString
    },
    numsperha: {
      type: _graphql.GraphQLString
    },
    survivalrate: {
      type: _graphql.GraphQLString
    },
    admixtureunits: {
      type: _graphql.GraphQLString
    },
    admixtureha: {
      type: _graphql.GraphQLString
    },
    meanheight: {
      type: _graphql.GraphQLString
    },
    heightincrease: {
      type: _graphql.GraphQLString
    },
    deathreason_id: {
      type: _graphql.GraphQLString
    },
    squaredeviation: {
      type: _graphql.GraphQLString
    },
    deviationreason_id: {
      type: _graphql.GraphQLString
    },
    successrate_id: {
      type: _graphql.GraphQLString
    },
    location: {
      type: _graphql.GraphQLString
    },
    shortanalysis: {
      type: _graphql.GraphQLString
    },
    executor_id: {
      type: _graphql.GraphQLString
    },
    controller_id: {
      type: _graphql.GraphQLString
    },
    alighner_id: {
      type: _graphql.GraphQLString
    },
    inspectiondate: {
      type: _graphql.GraphQLString
    },
    cropcomposition: {
      type: new _graphql.GraphQLList(cropcomp_list),
      resolve: forestcrop_id => getCropcomp(forestcrop_id)
    },
    totalcomposition: {
      type: new _graphql.GraphQLList(totalcomp_list),
      resolve: forestcrop_id => getTotalcomp(forestcrop_id)
    },
    mixcomposition: {
      type: new _graphql.GraphQLList(mixcomp_list),
      resolve: forestcrop_id => getMixcomp(forestcrop_id)
    }
  })
});
const ForestcropType = new _graphql.GraphQLObjectType({
  name: "Forestcrop",
  fields: {
    forestcrops: {
      type: new _graphql.GraphQLList(forestcrops_list),
      resolve: () => getForestcrops()
    }
  }
});
exports.ForestcropType = ForestcropType;

const getForestcrops = () => {
  return new Promise((resolve, reject) => {
    pool.connect(function (err, client, done) {
      if (err) {
        return console.error('error fetching client from pool', err);
      }

      client.query(`SELECT forestcrop_id, oblast_id, leshoz_id, forestry_id, block_id, stand_id, lot_num, leshozlotsquare, 
                  landtype_id, relief_id, exposition_id, soiltype_id, soddegree_id, crowndensity_id, underbrush_id, soilpreparation_id,
                  productionway_id, prodyear, seasontime_id, mainwoodspecies_id, mainprocent, shiftlayout_id, distanceinrow, distancebetweenrows,
                  minplantingage, maxplantingage, sownseeds, numofadditions, trialsites, laidonha, exampercent, numsperha, survivalrate, admixtureunits,
                  admixtureha, meanheight, heightincrease, deathreason_id, squaredeviation, deviationreason_id, successrate_id, location, shortanalysis,
                  executor_id, controller_id, alighner_id, inspectiondate
                  FROM inv.forestcrop`, function (err, result) {
        done();

        if (err) {
          return reject(console.error('error happened during query', err));
        }

        resolve(result.rows);
      });
    });
  });
};

const getCropcomp = forestcrop => {
  console.log(forestcrop.forestcrop_id);
  return new Promise((resolve, reject) => {
    pool.connect(function (err, client, done) {
      if (err) {
        return console.error('error fetching client from pool', err);
      }

      client.query('SELECT cropcomposition_id, woodspecies_id, forestcrop_id, species_percent FROM inv.cropcomposition WHERE forestcrop_id =' + forestcrop.forestcrop_id, function (err, result) {
        done();

        if (err) {
          return reject(console.error('error happened during query', err));
        }

        resolve(result.rows);
      });
    });
  });
};

const getTotalcomp = forestcrop => {
  return new Promise((resolve, reject) => {
    pool.connect(function (err, client, done) {
      if (err) {
        return console.error('error fetching client from pool', err);
      }

      client.query('SELECT totalcomposition_id, woodspecies_id, forestcrop_id, species_percent FROM inv.totalcomposition WHERE forestcrop_id =' + forestcrop.forestcrop_id, function (err, result) {
        done();

        if (err) {
          return reject(console.error('error happened during query', err));
        }

        resolve(result.rows);
      });
    });
  });
};

const getMixcomp = forestcrop => {
  return new Promise((resolve, reject) => {
    pool.connect(function (err, client, done) {
      if (err) {
        return console.error('error fetching client from pool', err);
      }

      client.query('SELECT mixcomposition_id, woodspecies_id, forestcrop_id, species_percent FROM inv.mixcomposition WHERE forestcrop_id =' + forestcrop.forestcrop_id, function (err, result) {
        done();

        if (err) {
          return reject(console.error('error happened during query', err));
        }

        resolve(result.rows);
      });
    });
  });
}; // const getOblastList = () => {
//   return new Promise((resolve, reject) => {
//     pool.connect(function (err, client, done) {
//       if (err) {
//         return console.error('error fetching client from pool', err)
//       }
//       client.query('SELECT oblast_id, oblast_ru FROM topo.oblast', function (err, result) {
//         done()
//         if (err) {
//           return reject(console.error('error happened during query', err))
//         }
//         resolve(result.rows)
//       })
//     })
//   }
//   )
// }
// const getLeshozList = (gid) => {
//   return new Promise((resolve, reject) => {
//     pool.connect(function (err, client, done) {
//       if (err) {
//         return console.error('error fetching client from pool', err)
//       }
//       client.query('SELECT leshoz_id, leshoz_ru, leshoztype_id FROM forest.leshoz WHERE oblast_id =' + gid.oblast_id, function (err, result) {
//         done()
//         if (err) {
//           return reject(console.error('error happened during query', err))
//         }
//         resolve(result.rows)
//       })
//     })
//   }
//   )
// }
// const getForestriesList = (leshoz) => {
//   return new Promise((resolve, reject) => {
//     pool.connect(function (err, client, done) {
//       if (err) {
//         return console.error('error fetching client from pool', err)
//       }
//       client.query('SELECT gid, forestry_ru, forestrytype_id, forestry_num FROM forest.forestry WHERE leshoz_id =' + leshoz.leshoz_id, function (err, result) {
//         done()
//         if (err) {
//           return reject(console.error('error happened during query', err))
//         }
//         resolve(result.rows)
//       })
//     })
//   }
//   )
// }
// const getBlockList = (forestry) => {
//   return new Promise((resolve, reject) => {
//     pool.connect(function (err, client, done) {
//       if (err) {
//         return console.error('error fetching client from pool', err)
//       }
//       client.query('SELECT gid, block_num, forestry_id FROM forest.block WHERE forestry_id =' + forestry.gid, function (err, result) {
//         done()
//         if (err) {
//           return reject(console.error('error happened during query', err))
//         }
//         resolve(result.rows)
//       })
//     })
//   }
//   )
// }
// const getStandList = (block) => {
//   return new Promise((resolve, reject) => {
//     pool.connect(function (err, client, done) {
//       if (err) {
//         return console.error('error fetching client from pool', err)
//       }
//       client.query('SELECT gid, leshoz_num, block_num, forestry_num, stand_num FROM forest.stand WHERE block_id =' + block.gid, function (err, result) {
//         done()
//         if (err) {
//           return reject(console.error('error happened during query', err))
//         }
//         resolve(result.rows)
//       })
//     })
//   }
//   )
// }
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy9mb3Jlc3Rjcm9wLmpzIl0sIm5hbWVzIjpbImNvblN0cmluZyIsInBvb2wiLCJQb29sIiwiY29ubmVjdGlvblN0cmluZyIsImNyb3Bjb21wX2xpc3QiLCJHcmFwaFFMT2JqZWN0VHlwZSIsIm5hbWUiLCJmaWVsZHMiLCJjcm9wY29tcG9zaXRpb25faWQiLCJ0eXBlIiwiR3JhcGhRTFN0cmluZyIsIndvb2RzcGVjaWVzX2lkIiwiZm9yZXN0Y3JvcF9pZCIsInNwZWNpZXNfcGVyY2VudCIsInRvdGFsY29tcF9saXN0IiwidG90YWxjb21wb3NpdGlvbl9pZCIsIm1peGNvbXBfbGlzdCIsIm1peGNvbXBvc2l0aW9uX2lkIiwiZm9yZXN0Y3JvcHNfbGlzdCIsIm9ibGFzdF9pZCIsImxlc2hvel9pZCIsImZvcmVzdHJ5X2lkIiwiYmxvY2tfaWQiLCJzdGFuZF9pZCIsImxvdF9udW0iLCJsZXNob3psb3RzcXVhcmUiLCJsYW5kdHlwZV9pZCIsInJlbGllZl9pZCIsImV4cG9zaXRpb25faWQiLCJzb2lsdHlwZV9pZCIsInNvZGRlZ3JlZV9pZCIsImNyb3duZGVuc2l0eV9pZCIsInVuZGVyYnJ1c2hfaWQiLCJzb2lscHJlcGFyYXRpb25faWQiLCJwcm9kdWN0aW9ud2F5X2lkIiwicHJvZHllYXIiLCJzZWFzb250aW1lX2lkIiwibWFpbndvb2RzcGVjaWVzX2lkIiwibWFpbnByb2NlbnQiLCJzaGlmdGxheW91dF9pZCIsImRpc3RhbmNlaW5yb3ciLCJkaXN0YW5jZWJldHdlZW5yb3dzIiwibWlucGxhbnRpbmdhZ2UiLCJtYXhwbGFudGluZ2FnZSIsInNvd25zZWVkcyIsIm51bW9mYWRkaXRpb25zIiwidHJpYWxzaXRlcyIsImxhaWRvbmhhIiwiZXhhbXBlcmNlbnQiLCJudW1zcGVyaGEiLCJzdXJ2aXZhbHJhdGUiLCJhZG1peHR1cmV1bml0cyIsImFkbWl4dHVyZWhhIiwibWVhbmhlaWdodCIsImhlaWdodGluY3JlYXNlIiwiZGVhdGhyZWFzb25faWQiLCJzcXVhcmVkZXZpYXRpb24iLCJkZXZpYXRpb25yZWFzb25faWQiLCJzdWNjZXNzcmF0ZV9pZCIsImxvY2F0aW9uIiwic2hvcnRhbmFseXNpcyIsImV4ZWN1dG9yX2lkIiwiY29udHJvbGxlcl9pZCIsImFsaWdobmVyX2lkIiwiaW5zcGVjdGlvbmRhdGUiLCJjcm9wY29tcG9zaXRpb24iLCJHcmFwaFFMTGlzdCIsInJlc29sdmUiLCJnZXRDcm9wY29tcCIsInRvdGFsY29tcG9zaXRpb24iLCJnZXRUb3RhbGNvbXAiLCJtaXhjb21wb3NpdGlvbiIsImdldE1peGNvbXAiLCJGb3Jlc3Rjcm9wVHlwZSIsImZvcmVzdGNyb3BzIiwiZ2V0Rm9yZXN0Y3JvcHMiLCJQcm9taXNlIiwicmVqZWN0IiwiY29ubmVjdCIsImVyciIsImNsaWVudCIsImRvbmUiLCJjb25zb2xlIiwiZXJyb3IiLCJxdWVyeSIsInJlc3VsdCIsInJvd3MiLCJmb3Jlc3Rjcm9wIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUEsTUFBTUEsU0FBUyxHQUFHLDhDQUFsQjtBQUNBLE1BQU1DLElBQUksR0FBRyxJQUFJQyxRQUFKLENBQVM7QUFDcEJDLEVBQUFBLGdCQUFnQixFQUFFSDtBQURFLENBQVQsQ0FBYixDLENBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdyYXBoUUxPYmplY3RUeXBlLCBHcmFwaFFMU3RyaW5nLCBHcmFwaFFMRmxvYXQsIEdyYXBoUUxMaXN0IH0gZnJvbSBcImdyYXBocWxcIjtcbmltcG9ydCB7IFBvb2wgfSBmcm9tICdwZydcblxuY29uc3QgY29uU3RyaW5nID0gJ3Bvc3RncmVzOi8vcG9zdGdyZXM6QDE5Mi4xNjguMjAuNzgvZm9yZXN0X2JkJ1xuY29uc3QgcG9vbCA9IG5ldyBQb29sKHtcbiAgY29ubmVjdGlvblN0cmluZzogY29uU3RyaW5nXG59KTtcblxuLy8gY29uc3Qgb2JsYXN0X2xpc3QgPSBuZXcgR3JhcGhRTE9iamVjdFR5cGUoe1xuLy8gICBuYW1lOiBcIm9ibGFzdF9saXN0XCIsXG4vLyAgIGZpZWxkczogKCkgPT4gKHtcbi8vICAgICBvYmxhc3RfaWQ6IHsgdHlwZTogR3JhcGhRTFN0cmluZyB9LFxuLy8gICAgIG9ibGFzdF9ydTogeyB0eXBlOiBHcmFwaFFMU3RyaW5nIH0sXG4vLyAgICAgb2JsYXN0X2t5OiB7IHR5cGU6IEdyYXBoUUxTdHJpbmcgfSxcbi8vICAgICBvYmxhc3RfZW46IHsgdHlwZTogR3JhcGhRTFN0cmluZyB9LFxuLy8gICAgIGdlb206IHsgdHlwZTogR3JhcGhRTFN0cmluZyB9LFxuLy8gICAgIGxlc2hvel9saXN0OiB7XG4vLyAgICAgICB0eXBlOiBuZXcgR3JhcGhRTExpc3QobGVzaG96X2xpc3QpLFxuLy8gICAgICAgcmVzb2x2ZTogb2JsYXN0X2lkID0+IGdldExlc2hvekxpc3Qob2JsYXN0X2lkKVxuLy8gICAgIH0sXG5cblxuLy8gICB9KVxuLy8gfSk7XG5cbi8vIGNvbnN0IGxlc2hvel9saXN0ID0gbmV3IEdyYXBoUUxPYmplY3RUeXBlKHtcbi8vICAgbmFtZTogXCJsZXNob3pfbGlzdFwiLFxuLy8gICBmaWVsZHM6ICgpID0+ICh7XG4vLyAgICAgbGVzaG96X2lkOiB7IHR5cGU6IEdyYXBoUUxTdHJpbmcgfSxcbi8vICAgICBsZXNob3pfcnU6IHsgdHlwZTogR3JhcGhRTFN0cmluZyB9LFxuLy8gICAgIGdlb206IHsgdHlwZTogR3JhcGhRTFN0cmluZyB9LFxuLy8gICAgIGxlc2hvenR5cGVfaWQ6IHsgdHlwZTogR3JhcGhRTFN0cmluZyB9LFxuLy8gICAgIGZvcmVzdHJpZXNfbGlzdDoge1xuLy8gICAgICAgdHlwZTogbmV3IEdyYXBoUUxMaXN0KGZvcmVzdHJpZXNfbGlzdCksXG4vLyAgICAgICByZXNvbHZlOiBsZXNob3pfaWQgPT4gZ2V0Rm9yZXN0cmllc0xpc3QobGVzaG96X2lkKVxuLy8gICAgIH0sXG4vLyAgIH0pXG4vLyB9KTtcblxuLy8gY29uc3QgZm9yZXN0cmllc19saXN0ID0gbmV3IEdyYXBoUUxPYmplY3RUeXBlKHtcbi8vICAgbmFtZTogXCJmb3Jlc3RyaWVzX2xpc3RcIixcbi8vICAgZmllbGRzOiAoKSA9PiAoe1xuLy8gICAgIGdpZDogeyB0eXBlOiBHcmFwaFFMU3RyaW5nIH0sXG4vLyAgICAgZ2VvbTogeyB0eXBlOiBHcmFwaFFMU3RyaW5nIH0sXG4vLyAgICAgZm9yZXN0cnlfcnU6IHsgdHlwZTogR3JhcGhRTFN0cmluZyB9LFxuLy8gICAgIGZvcmVzdHJ5X251bTogeyB0eXBlOiBHcmFwaFFMU3RyaW5nIH0sXG4vLyAgICAgZm9yZXN0cnl0eXBlX2lkOiB7IHR5cGU6IEdyYXBoUUxTdHJpbmcgfSxcbi8vICAgICBibG9ja19saXN0OiB7XG4vLyAgICAgICB0eXBlOiBuZXcgR3JhcGhRTExpc3QoYmxvY2tfbGlzdCksXG4vLyAgICAgICByZXNvbHZlOiBnaWQgPT4gZ2V0QmxvY2tMaXN0KGdpZClcbi8vICAgICB9LFxuLy8gICB9KVxuLy8gfSk7XG5cbi8vIGNvbnN0IGJsb2NrX2xpc3QgPSBuZXcgR3JhcGhRTE9iamVjdFR5cGUoe1xuLy8gICBuYW1lOiBcImJsb2NrX2xpc3RcIixcbi8vICAgZmllbGRzOiAoKSA9PiAoe1xuLy8gICAgIGdpZDogeyB0eXBlOiBHcmFwaFFMU3RyaW5nIH0sXG4vLyAgICAgZ2VvbTogeyB0eXBlOiBHcmFwaFFMU3RyaW5nIH0sXG4vLyAgICAgZm9yZXN0cnlfaWQ6IHsgdHlwZTogR3JhcGhRTFN0cmluZyB9LFxuLy8gICAgIGJsb2NrX251bTogeyB0eXBlOiBHcmFwaFFMU3RyaW5nIH0sXG4vLyAgICAgc3RhbmRfbGlzdDoge1xuLy8gICAgICAgdHlwZTogbmV3IEdyYXBoUUxMaXN0KHN0YW5kX2xpc3QpLFxuLy8gICAgICAgcmVzb2x2ZTogZ2lkID0+IGdldFN0YW5kTGlzdChnaWQpXG4vLyAgICAgfSxcbi8vICAgfSlcbi8vIH0pO1xuXG4vLyBjb25zdCBzdGFuZF9saXN0ID0gbmV3IEdyYXBoUUxPYmplY3RUeXBlKHtcbi8vICAgbmFtZTogXCJzdGFuZF9saXN0XCIsXG4vLyAgIGZpZWxkczogKCkgPT4gKHtcbi8vICAgICBnaWQ6IHsgdHlwZTogR3JhcGhRTFN0cmluZyB9LFxuLy8gICAgIGdlb206IHsgdHlwZTogR3JhcGhRTFN0cmluZyB9LFxuLy8gICAgIGxlc2hvel9udW06IHsgdHlwZTogR3JhcGhRTFN0cmluZyB9LFxuLy8gICAgIGJsb2NrX251bTogeyB0eXBlOiBHcmFwaFFMU3RyaW5nIH0sXG4vLyAgICAgZm9yZXN0cnlfbnVtOiB7IHR5cGU6IEdyYXBoUUxTdHJpbmcgfSxcbi8vICAgICBzdGFuZF9jb2RlOiB7IHR5cGU6IEdyYXBoUUxTdHJpbmcgfSxcbi8vICAgICBzdGFuZF9udW06IHsgdHlwZTogR3JhcGhRTFN0cmluZyB9LFxuLy8gICB9KVxuLy8gfSk7XG5cblxuLy8gZXhwb3J0IGNvbnN0IEZvcmVzdGNyb3BUeXBlID0gbmV3IEdyYXBoUUxPYmplY3RUeXBlKHtcbi8vICAgbmFtZTogXCJGb3Jlc3Rjcm9wXCIsXG4vLyAgIGZpZWxkczoge1xuLy8gICAgIG9ibGFzdHM6IHtcbi8vICAgICAgIHR5cGU6IG5ldyBHcmFwaFFMTGlzdChvYmxhc3RfbGlzdCksXG4vLyAgICAgICByZXNvbHZlOiAoKSA9PiBnZXRPYmxhc3RMaXN0KClcbi8vICAgICB9XG4vLyAgIH1cbi8vIH0pO1xuY29uc3QgY3JvcGNvbXBfbGlzdCA9IG5ldyBHcmFwaFFMT2JqZWN0VHlwZSh7XG4gIG5hbWU6IFwiY3JvcGNvbXBfbGlzdFwiLFxuICBmaWVsZHM6ICgpID0+ICh7XG4gICAgY3JvcGNvbXBvc2l0aW9uX2lkOiB7IHR5cGU6IEdyYXBoUUxTdHJpbmcgfSxcbiAgICB3b29kc3BlY2llc19pZDogeyB0eXBlOiBHcmFwaFFMU3RyaW5nIH0sXG4gICAgZm9yZXN0Y3JvcF9pZDogeyB0eXBlOiBHcmFwaFFMU3RyaW5nIH0sXG4gICAgc3BlY2llc19wZXJjZW50OiB7IHR5cGU6IEdyYXBoUUxTdHJpbmcgfSxcbiAgfSlcbn0pO1xuXG5jb25zdCB0b3RhbGNvbXBfbGlzdCA9IG5ldyBHcmFwaFFMT2JqZWN0VHlwZSh7XG4gIG5hbWU6IFwidG90YWxjb21wX2xpc3RcIixcbiAgZmllbGRzOiAoKSA9PiAoe1xuICAgIHRvdGFsY29tcG9zaXRpb25faWQ6IHsgdHlwZTogR3JhcGhRTFN0cmluZyB9LFxuICAgIHdvb2RzcGVjaWVzX2lkOiB7IHR5cGU6IEdyYXBoUUxTdHJpbmcgfSxcbiAgICBmb3Jlc3Rjcm9wX2lkOiB7IHR5cGU6IEdyYXBoUUxTdHJpbmcgfSxcbiAgICBzcGVjaWVzX3BlcmNlbnQ6IHsgdHlwZTogR3JhcGhRTFN0cmluZyB9LFxuICB9KVxufSk7XG5cbmNvbnN0IG1peGNvbXBfbGlzdCA9IG5ldyBHcmFwaFFMT2JqZWN0VHlwZSh7XG4gIG5hbWU6IFwibWl4Y29tcF9saXN0XCIsXG4gIGZpZWxkczogKCkgPT4gKHtcbiAgICBtaXhjb21wb3NpdGlvbl9pZDogeyB0eXBlOiBHcmFwaFFMU3RyaW5nIH0sXG4gICAgd29vZHNwZWNpZXNfaWQ6IHsgdHlwZTogR3JhcGhRTFN0cmluZyB9LFxuICAgIGZvcmVzdGNyb3BfaWQ6IHsgdHlwZTogR3JhcGhRTFN0cmluZyB9LFxuICAgIHNwZWNpZXNfcGVyY2VudDogeyB0eXBlOiBHcmFwaFFMU3RyaW5nIH0sXG4gIH0pXG59KTtcblxuY29uc3QgZm9yZXN0Y3JvcHNfbGlzdCA9IG5ldyBHcmFwaFFMT2JqZWN0VHlwZSh7XG4gIG5hbWU6IFwiZm9yZXN0Y3JvcHNfbGlzdFwiLFxuICBmaWVsZHM6ICgpID0+ICh7XG4gICAgZm9yZXN0Y3JvcF9pZDogeyB0eXBlOiBHcmFwaFFMU3RyaW5nIH0sXG4gICAgb2JsYXN0X2lkOiB7IHR5cGU6IEdyYXBoUUxTdHJpbmcgfSxcbiAgICBsZXNob3pfaWQ6IHsgdHlwZTogR3JhcGhRTFN0cmluZyB9LFxuICAgIGZvcmVzdHJ5X2lkOiB7IHR5cGU6IEdyYXBoUUxTdHJpbmcgfSxcbiAgICBibG9ja19pZDogeyB0eXBlOiBHcmFwaFFMU3RyaW5nIH0sXG4gICAgc3RhbmRfaWQ6IHsgdHlwZTogR3JhcGhRTFN0cmluZyB9LFxuICAgIGxvdF9udW06IHsgdHlwZTogR3JhcGhRTFN0cmluZyB9LFxuICAgIGxlc2hvemxvdHNxdWFyZTogeyB0eXBlOiBHcmFwaFFMU3RyaW5nIH0sXG4gICAgbGFuZHR5cGVfaWQ6IHsgdHlwZTogR3JhcGhRTFN0cmluZyB9LFxuICAgIHJlbGllZl9pZDogeyB0eXBlOiBHcmFwaFFMU3RyaW5nIH0sXG4gICAgZXhwb3NpdGlvbl9pZDogeyB0eXBlOiBHcmFwaFFMU3RyaW5nIH0sXG4gICAgc29pbHR5cGVfaWQ6IHsgdHlwZTogR3JhcGhRTFN0cmluZyB9LFxuICAgIHNvZGRlZ3JlZV9pZDogeyB0eXBlOiBHcmFwaFFMU3RyaW5nIH0sXG4gICAgY3Jvd25kZW5zaXR5X2lkOiB7IHR5cGU6IEdyYXBoUUxTdHJpbmcgfSxcbiAgICB1bmRlcmJydXNoX2lkOiB7IHR5cGU6IEdyYXBoUUxTdHJpbmcgfSxcbiAgICBzb2lscHJlcGFyYXRpb25faWQ6IHsgdHlwZTogR3JhcGhRTFN0cmluZyB9LFxuICAgIHByb2R1Y3Rpb253YXlfaWQ6IHsgdHlwZTogR3JhcGhRTFN0cmluZyB9LFxuICAgIHByb2R5ZWFyOiB7IHR5cGU6IEdyYXBoUUxTdHJpbmcgfSxcbiAgICBzZWFzb250aW1lX2lkOiB7IHR5cGU6IEdyYXBoUUxTdHJpbmcgfSxcbiAgICBtYWlud29vZHNwZWNpZXNfaWQ6IHsgdHlwZTogR3JhcGhRTFN0cmluZyB9LFxuICAgIG1haW5wcm9jZW50OiB7IHR5cGU6IEdyYXBoUUxTdHJpbmcgfSxcbiAgICBzaGlmdGxheW91dF9pZDogeyB0eXBlOiBHcmFwaFFMU3RyaW5nIH0sXG4gICAgZGlzdGFuY2VpbnJvdzogeyB0eXBlOiBHcmFwaFFMU3RyaW5nIH0sXG4gICAgZGlzdGFuY2ViZXR3ZWVucm93czogeyB0eXBlOiBHcmFwaFFMU3RyaW5nIH0sXG4gICAgbWlucGxhbnRpbmdhZ2U6IHsgdHlwZTogR3JhcGhRTFN0cmluZyB9LFxuICAgIG1heHBsYW50aW5nYWdlOiB7IHR5cGU6IEdyYXBoUUxTdHJpbmcgfSxcbiAgICBzb3duc2VlZHM6IHsgdHlwZTogR3JhcGhRTFN0cmluZyB9LFxuICAgIG51bW9mYWRkaXRpb25zOiB7IHR5cGU6IEdyYXBoUUxTdHJpbmcgfSxcbiAgICB0cmlhbHNpdGVzOiB7IHR5cGU6IEdyYXBoUUxTdHJpbmcgfSxcbiAgICBsYWlkb25oYTogeyB0eXBlOiBHcmFwaFFMU3RyaW5nIH0sXG4gICAgZXhhbXBlcmNlbnQ6IHsgdHlwZTogR3JhcGhRTFN0cmluZyB9LFxuICAgIG51bXNwZXJoYTogeyB0eXBlOiBHcmFwaFFMU3RyaW5nIH0sXG4gICAgc3Vydml2YWxyYXRlOiB7IHR5cGU6IEdyYXBoUUxTdHJpbmcgfSxcbiAgICBhZG1peHR1cmV1bml0czogeyB0eXBlOiBHcmFwaFFMU3RyaW5nIH0sXG4gICAgYWRtaXh0dXJlaGE6IHsgdHlwZTogR3JhcGhRTFN0cmluZyB9LFxuICAgIG1lYW5oZWlnaHQ6IHsgdHlwZTogR3JhcGhRTFN0cmluZyB9LFxuICAgIGhlaWdodGluY3JlYXNlOiB7IHR5cGU6IEdyYXBoUUxTdHJpbmcgfSxcbiAgICBkZWF0aHJlYXNvbl9pZDogeyB0eXBlOiBHcmFwaFFMU3RyaW5nIH0sXG4gICAgc3F1YXJlZGV2aWF0aW9uOiB7IHR5cGU6IEdyYXBoUUxTdHJpbmcgfSxcbiAgICBkZXZpYXRpb25yZWFzb25faWQ6IHsgdHlwZTogR3JhcGhRTFN0cmluZyB9LFxuICAgIHN1Y2Nlc3NyYXRlX2lkOiB7IHR5cGU6IEdyYXBoUUxTdHJpbmcgfSxcbiAgICBsb2NhdGlvbjogeyB0eXBlOiBHcmFwaFFMU3RyaW5nIH0sXG4gICAgc2hvcnRhbmFseXNpczogeyB0eXBlOiBHcmFwaFFMU3RyaW5nIH0sXG4gICAgZXhlY3V0b3JfaWQ6IHsgdHlwZTogR3JhcGhRTFN0cmluZyB9LFxuICAgIGNvbnRyb2xsZXJfaWQ6IHsgdHlwZTogR3JhcGhRTFN0cmluZyB9LFxuICAgIGFsaWdobmVyX2lkOiB7IHR5cGU6IEdyYXBoUUxTdHJpbmcgfSxcbiAgICBpbnNwZWN0aW9uZGF0ZTogeyB0eXBlOiBHcmFwaFFMU3RyaW5nIH0sXG4gICAgY3JvcGNvbXBvc2l0aW9uOiB7XG4gICAgICB0eXBlOiBuZXcgR3JhcGhRTExpc3QoY3JvcGNvbXBfbGlzdCksXG4gICAgICByZXNvbHZlOiBmb3Jlc3Rjcm9wX2lkID0+IGdldENyb3Bjb21wKGZvcmVzdGNyb3BfaWQpXG4gICAgfSxcbiAgICB0b3RhbGNvbXBvc2l0aW9uOiB7XG4gICAgICB0eXBlOiBuZXcgR3JhcGhRTExpc3QodG90YWxjb21wX2xpc3QpLFxuICAgICAgcmVzb2x2ZTogZm9yZXN0Y3JvcF9pZCA9PiBnZXRUb3RhbGNvbXAoZm9yZXN0Y3JvcF9pZClcbiAgICB9LFxuICAgIG1peGNvbXBvc2l0aW9uOiB7XG4gICAgICB0eXBlOiBuZXcgR3JhcGhRTExpc3QobWl4Y29tcF9saXN0KSxcbiAgICAgIHJlc29sdmU6IGZvcmVzdGNyb3BfaWQgPT4gZ2V0TWl4Y29tcChmb3Jlc3Rjcm9wX2lkKVxuICAgIH0sXG4gIH0pXG59KTtcblxuZXhwb3J0IGNvbnN0IEZvcmVzdGNyb3BUeXBlID0gbmV3IEdyYXBoUUxPYmplY3RUeXBlKHtcbiAgbmFtZTogXCJGb3Jlc3Rjcm9wXCIsXG4gIGZpZWxkczoge1xuICAgIGZvcmVzdGNyb3BzOiB7XG4gICAgICB0eXBlOiBuZXcgR3JhcGhRTExpc3QoZm9yZXN0Y3JvcHNfbGlzdCksXG4gICAgICByZXNvbHZlOiAoKSA9PiBnZXRGb3Jlc3Rjcm9wcygpXG4gICAgfVxuICB9XG59KTtcblxuXG5jb25zdCBnZXRGb3Jlc3Rjcm9wcyA9ICgpID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBwb29sLmNvbm5lY3QoZnVuY3Rpb24gKGVyciwgY2xpZW50LCBkb25lKSB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKCdlcnJvciBmZXRjaGluZyBjbGllbnQgZnJvbSBwb29sJywgZXJyKVxuICAgICAgfVxuICAgICAgY2xpZW50LnF1ZXJ5KGBTRUxFQ1QgZm9yZXN0Y3JvcF9pZCwgb2JsYXN0X2lkLCBsZXNob3pfaWQsIGZvcmVzdHJ5X2lkLCBibG9ja19pZCwgc3RhbmRfaWQsIGxvdF9udW0sIGxlc2hvemxvdHNxdWFyZSwgXG4gICAgICAgICAgICAgICAgICBsYW5kdHlwZV9pZCwgcmVsaWVmX2lkLCBleHBvc2l0aW9uX2lkLCBzb2lsdHlwZV9pZCwgc29kZGVncmVlX2lkLCBjcm93bmRlbnNpdHlfaWQsIHVuZGVyYnJ1c2hfaWQsIHNvaWxwcmVwYXJhdGlvbl9pZCxcbiAgICAgICAgICAgICAgICAgIHByb2R1Y3Rpb253YXlfaWQsIHByb2R5ZWFyLCBzZWFzb250aW1lX2lkLCBtYWlud29vZHNwZWNpZXNfaWQsIG1haW5wcm9jZW50LCBzaGlmdGxheW91dF9pZCwgZGlzdGFuY2VpbnJvdywgZGlzdGFuY2ViZXR3ZWVucm93cyxcbiAgICAgICAgICAgICAgICAgIG1pbnBsYW50aW5nYWdlLCBtYXhwbGFudGluZ2FnZSwgc293bnNlZWRzLCBudW1vZmFkZGl0aW9ucywgdHJpYWxzaXRlcywgbGFpZG9uaGEsIGV4YW1wZXJjZW50LCBudW1zcGVyaGEsIHN1cnZpdmFscmF0ZSwgYWRtaXh0dXJldW5pdHMsXG4gICAgICAgICAgICAgICAgICBhZG1peHR1cmVoYSwgbWVhbmhlaWdodCwgaGVpZ2h0aW5jcmVhc2UsIGRlYXRocmVhc29uX2lkLCBzcXVhcmVkZXZpYXRpb24sIGRldmlhdGlvbnJlYXNvbl9pZCwgc3VjY2Vzc3JhdGVfaWQsIGxvY2F0aW9uLCBzaG9ydGFuYWx5c2lzLFxuICAgICAgICAgICAgICAgICAgZXhlY3V0b3JfaWQsIGNvbnRyb2xsZXJfaWQsIGFsaWdobmVyX2lkLCBpbnNwZWN0aW9uZGF0ZVxuICAgICAgICAgICAgICAgICAgRlJPTSBpbnYuZm9yZXN0Y3JvcGAsIGZ1bmN0aW9uIChlcnIsIHJlc3VsdCkge1xuICAgICAgICBkb25lKClcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIHJldHVybiByZWplY3QoY29uc29sZS5lcnJvcignZXJyb3IgaGFwcGVuZWQgZHVyaW5nIHF1ZXJ5JywgZXJyKSlcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlKHJlc3VsdC5yb3dzKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG4gIClcbn1cblxuXG5jb25zdCBnZXRDcm9wY29tcCA9IChmb3Jlc3Rjcm9wKSA9PiB7XG4gIGNvbnNvbGUubG9nKGZvcmVzdGNyb3AuZm9yZXN0Y3JvcF9pZClcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBwb29sLmNvbm5lY3QoZnVuY3Rpb24gKGVyciwgY2xpZW50LCBkb25lKSB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKCdlcnJvciBmZXRjaGluZyBjbGllbnQgZnJvbSBwb29sJywgZXJyKVxuICAgICAgfVxuICAgICAgY2xpZW50LnF1ZXJ5KCdTRUxFQ1QgY3JvcGNvbXBvc2l0aW9uX2lkLCB3b29kc3BlY2llc19pZCwgZm9yZXN0Y3JvcF9pZCwgc3BlY2llc19wZXJjZW50IEZST00gaW52LmNyb3Bjb21wb3NpdGlvbiBXSEVSRSBmb3Jlc3Rjcm9wX2lkID0nICsgZm9yZXN0Y3JvcC5mb3Jlc3Rjcm9wX2lkLCBmdW5jdGlvbiAoZXJyLCByZXN1bHQpIHtcbiAgICAgICAgZG9uZSgpXG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KGNvbnNvbGUuZXJyb3IoJ2Vycm9yIGhhcHBlbmVkIGR1cmluZyBxdWVyeScsIGVycikpXG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZShyZXN1bHQucm93cylcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuICApXG59XG5cbmNvbnN0IGdldFRvdGFsY29tcCA9IChmb3Jlc3Rjcm9wKSA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgcG9vbC5jb25uZWN0KGZ1bmN0aW9uIChlcnIsIGNsaWVudCwgZG9uZSkge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICByZXR1cm4gY29uc29sZS5lcnJvcignZXJyb3IgZmV0Y2hpbmcgY2xpZW50IGZyb20gcG9vbCcsIGVycilcbiAgICAgIH1cbiAgICAgIGNsaWVudC5xdWVyeSgnU0VMRUNUIHRvdGFsY29tcG9zaXRpb25faWQsIHdvb2RzcGVjaWVzX2lkLCBmb3Jlc3Rjcm9wX2lkLCBzcGVjaWVzX3BlcmNlbnQgRlJPTSBpbnYudG90YWxjb21wb3NpdGlvbiBXSEVSRSBmb3Jlc3Rjcm9wX2lkID0nICsgZm9yZXN0Y3JvcC5mb3Jlc3Rjcm9wX2lkLCBmdW5jdGlvbiAoZXJyLCByZXN1bHQpIHtcbiAgICAgICAgZG9uZSgpXG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KGNvbnNvbGUuZXJyb3IoJ2Vycm9yIGhhcHBlbmVkIGR1cmluZyBxdWVyeScsIGVycikpXG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZShyZXN1bHQucm93cylcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuICApXG59XG5cbmNvbnN0IGdldE1peGNvbXAgPSAoZm9yZXN0Y3JvcCkgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHBvb2wuY29ubmVjdChmdW5jdGlvbiAoZXJyLCBjbGllbnQsIGRvbmUpIHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ2Vycm9yIGZldGNoaW5nIGNsaWVudCBmcm9tIHBvb2wnLCBlcnIpXG4gICAgICB9XG4gICAgICBjbGllbnQucXVlcnkoJ1NFTEVDVCBtaXhjb21wb3NpdGlvbl9pZCwgd29vZHNwZWNpZXNfaWQsIGZvcmVzdGNyb3BfaWQsIHNwZWNpZXNfcGVyY2VudCBGUk9NIGludi5taXhjb21wb3NpdGlvbiBXSEVSRSBmb3Jlc3Rjcm9wX2lkID0nICsgZm9yZXN0Y3JvcC5mb3Jlc3Rjcm9wX2lkLCBmdW5jdGlvbiAoZXJyLCByZXN1bHQpIHtcbiAgICAgICAgZG9uZSgpXG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KGNvbnNvbGUuZXJyb3IoJ2Vycm9yIGhhcHBlbmVkIGR1cmluZyBxdWVyeScsIGVycikpXG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZShyZXN1bHQucm93cylcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuICApXG59XG4vLyBjb25zdCBnZXRPYmxhc3RMaXN0ID0gKCkgPT4ge1xuLy8gICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuLy8gICAgIHBvb2wuY29ubmVjdChmdW5jdGlvbiAoZXJyLCBjbGllbnQsIGRvbmUpIHtcbi8vICAgICAgIGlmIChlcnIpIHtcbi8vICAgICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ2Vycm9yIGZldGNoaW5nIGNsaWVudCBmcm9tIHBvb2wnLCBlcnIpXG4vLyAgICAgICB9XG4vLyAgICAgICBjbGllbnQucXVlcnkoJ1NFTEVDVCBvYmxhc3RfaWQsIG9ibGFzdF9ydSBGUk9NIHRvcG8ub2JsYXN0JywgZnVuY3Rpb24gKGVyciwgcmVzdWx0KSB7XG4vLyAgICAgICAgIGRvbmUoKVxuLy8gICAgICAgICBpZiAoZXJyKSB7XG4vLyAgICAgICAgICAgcmV0dXJuIHJlamVjdChjb25zb2xlLmVycm9yKCdlcnJvciBoYXBwZW5lZCBkdXJpbmcgcXVlcnknLCBlcnIpKVxuLy8gICAgICAgICB9XG4vLyAgICAgICAgIHJlc29sdmUocmVzdWx0LnJvd3MpXG4vLyAgICAgICB9KVxuLy8gICAgIH0pXG4vLyAgIH1cbi8vICAgKVxuLy8gfVxuXG4vLyBjb25zdCBnZXRMZXNob3pMaXN0ID0gKGdpZCkgPT4ge1xuLy8gICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuLy8gICAgIHBvb2wuY29ubmVjdChmdW5jdGlvbiAoZXJyLCBjbGllbnQsIGRvbmUpIHtcbi8vICAgICAgIGlmIChlcnIpIHtcbi8vICAgICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ2Vycm9yIGZldGNoaW5nIGNsaWVudCBmcm9tIHBvb2wnLCBlcnIpXG4vLyAgICAgICB9XG4vLyAgICAgICBjbGllbnQucXVlcnkoJ1NFTEVDVCBsZXNob3pfaWQsIGxlc2hvel9ydSwgbGVzaG96dHlwZV9pZCBGUk9NIGZvcmVzdC5sZXNob3ogV0hFUkUgb2JsYXN0X2lkID0nICsgZ2lkLm9ibGFzdF9pZCwgZnVuY3Rpb24gKGVyciwgcmVzdWx0KSB7XG4vLyAgICAgICAgIGRvbmUoKVxuLy8gICAgICAgICBpZiAoZXJyKSB7XG4vLyAgICAgICAgICAgcmV0dXJuIHJlamVjdChjb25zb2xlLmVycm9yKCdlcnJvciBoYXBwZW5lZCBkdXJpbmcgcXVlcnknLCBlcnIpKVxuLy8gICAgICAgICB9XG4vLyAgICAgICAgIHJlc29sdmUocmVzdWx0LnJvd3MpXG4vLyAgICAgICB9KVxuLy8gICAgIH0pXG4vLyAgIH1cbi8vICAgKVxuLy8gfVxuXG4vLyBjb25zdCBnZXRGb3Jlc3RyaWVzTGlzdCA9IChsZXNob3opID0+IHtcbi8vICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbi8vICAgICBwb29sLmNvbm5lY3QoZnVuY3Rpb24gKGVyciwgY2xpZW50LCBkb25lKSB7XG4vLyAgICAgICBpZiAoZXJyKSB7XG4vLyAgICAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKCdlcnJvciBmZXRjaGluZyBjbGllbnQgZnJvbSBwb29sJywgZXJyKVxuLy8gICAgICAgfVxuLy8gICAgICAgY2xpZW50LnF1ZXJ5KCdTRUxFQ1QgZ2lkLCBmb3Jlc3RyeV9ydSwgZm9yZXN0cnl0eXBlX2lkLCBmb3Jlc3RyeV9udW0gRlJPTSBmb3Jlc3QuZm9yZXN0cnkgV0hFUkUgbGVzaG96X2lkID0nICsgbGVzaG96Lmxlc2hvel9pZCwgZnVuY3Rpb24gKGVyciwgcmVzdWx0KSB7XG4vLyAgICAgICAgIGRvbmUoKVxuLy8gICAgICAgICBpZiAoZXJyKSB7XG4vLyAgICAgICAgICAgcmV0dXJuIHJlamVjdChjb25zb2xlLmVycm9yKCdlcnJvciBoYXBwZW5lZCBkdXJpbmcgcXVlcnknLCBlcnIpKVxuLy8gICAgICAgICB9XG4vLyAgICAgICAgIHJlc29sdmUocmVzdWx0LnJvd3MpXG4vLyAgICAgICB9KVxuLy8gICAgIH0pXG4vLyAgIH1cbi8vICAgKVxuLy8gfVxuXG5cbi8vIGNvbnN0IGdldEJsb2NrTGlzdCA9IChmb3Jlc3RyeSkgPT4ge1xuLy8gICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuLy8gICAgIHBvb2wuY29ubmVjdChmdW5jdGlvbiAoZXJyLCBjbGllbnQsIGRvbmUpIHtcbi8vICAgICAgIGlmIChlcnIpIHtcbi8vICAgICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ2Vycm9yIGZldGNoaW5nIGNsaWVudCBmcm9tIHBvb2wnLCBlcnIpXG4vLyAgICAgICB9XG4vLyAgICAgICBjbGllbnQucXVlcnkoJ1NFTEVDVCBnaWQsIGJsb2NrX251bSwgZm9yZXN0cnlfaWQgRlJPTSBmb3Jlc3QuYmxvY2sgV0hFUkUgZm9yZXN0cnlfaWQgPScgKyBmb3Jlc3RyeS5naWQsIGZ1bmN0aW9uIChlcnIsIHJlc3VsdCkge1xuLy8gICAgICAgICBkb25lKClcbi8vICAgICAgICAgaWYgKGVycikge1xuLy8gICAgICAgICAgIHJldHVybiByZWplY3QoY29uc29sZS5lcnJvcignZXJyb3IgaGFwcGVuZWQgZHVyaW5nIHF1ZXJ5JywgZXJyKSlcbi8vICAgICAgICAgfVxuLy8gICAgICAgICByZXNvbHZlKHJlc3VsdC5yb3dzKVxuLy8gICAgICAgfSlcbi8vICAgICB9KVxuLy8gICB9XG4vLyAgIClcbi8vIH1cblxuXG4vLyBjb25zdCBnZXRTdGFuZExpc3QgPSAoYmxvY2spID0+IHtcbi8vICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbi8vICAgICBwb29sLmNvbm5lY3QoZnVuY3Rpb24gKGVyciwgY2xpZW50LCBkb25lKSB7XG4vLyAgICAgICBpZiAoZXJyKSB7XG4vLyAgICAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKCdlcnJvciBmZXRjaGluZyBjbGllbnQgZnJvbSBwb29sJywgZXJyKVxuLy8gICAgICAgfVxuLy8gICAgICAgY2xpZW50LnF1ZXJ5KCdTRUxFQ1QgZ2lkLCBsZXNob3pfbnVtLCBibG9ja19udW0sIGZvcmVzdHJ5X251bSwgc3RhbmRfbnVtIEZST00gZm9yZXN0LnN0YW5kIFdIRVJFIGJsb2NrX2lkID0nICsgYmxvY2suZ2lkLCBmdW5jdGlvbiAoZXJyLCByZXN1bHQpIHtcbi8vICAgICAgICAgZG9uZSgpXG4vLyAgICAgICAgIGlmIChlcnIpIHtcbi8vICAgICAgICAgICByZXR1cm4gcmVqZWN0KGNvbnNvbGUuZXJyb3IoJ2Vycm9yIGhhcHBlbmVkIGR1cmluZyBxdWVyeScsIGVycikpXG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgcmVzb2x2ZShyZXN1bHQucm93cylcbi8vICAgICAgIH0pXG4vLyAgICAgfSlcbi8vICAgfVxuLy8gICApXG4vLyB9Il19