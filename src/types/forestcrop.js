import { GraphQLObjectType, GraphQLString, GraphQLFloat, GraphQLList } from "graphql";
import { Pool } from 'pg'

const conString = 'postgres://postgres:@192.168.20.78/forest_bd'
const pool = new Pool({
  connectionString: conString
});

// const oblast_list = new GraphQLObjectType({
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
const cropcomp_list = new GraphQLObjectType({
  name: "cropcomp_list",
  fields: () => ({
    cropcomposition_id: { type: GraphQLString },
    woodspecies_id: { type: GraphQLString },
    forestcrop_id: { type: GraphQLString },
    species_percent: { type: GraphQLString },
  })
});

const totalcomp_list = new GraphQLObjectType({
  name: "totalcomp_list",
  fields: () => ({
    totalcomposition_id: { type: GraphQLString },
    woodspecies_id: { type: GraphQLString },
    forestcrop_id: { type: GraphQLString },
    species_percent: { type: GraphQLString },
  })
});

const mixcomp_list = new GraphQLObjectType({
  name: "mixcomp_list",
  fields: () => ({
    mixcomposition_id: { type: GraphQLString },
    woodspecies_id: { type: GraphQLString },
    forestcrop_id: { type: GraphQLString },
    species_percent: { type: GraphQLString },
  })
});

const forestcrops_list = new GraphQLObjectType({
  name: "forestcrops_list",
  fields: () => ({
    forestcrop_id: { type: GraphQLString },
    oblast_id: { type: GraphQLString },
    leshoz_id: { type: GraphQLString },
    forestry_id: { type: GraphQLString },
    block_id: { type: GraphQLString },
    stand_id: { type: GraphQLString },
    lot_num: { type: GraphQLString },
    leshozlotsquare: { type: GraphQLString },
    landtype_id: { type: GraphQLString },
    relief_id: { type: GraphQLString },
    exposition_id: { type: GraphQLString },
    soiltype_id: { type: GraphQLString },
    soddegree_id: { type: GraphQLString },
    crowndensity_id: { type: GraphQLString },
    underbrush_id: { type: GraphQLString },
    soilpreparation_id: { type: GraphQLString },
    productionway_id: { type: GraphQLString },
    prodyear: { type: GraphQLString },
    seasontime_id: { type: GraphQLString },
    mainwoodspecies_id: { type: GraphQLString },
    mainprocent: { type: GraphQLString },
    shiftlayout_id: { type: GraphQLString },
    distanceinrow: { type: GraphQLString },
    distancebetweenrows: { type: GraphQLString },
    minplantingage: { type: GraphQLString },
    maxplantingage: { type: GraphQLString },
    sownseeds: { type: GraphQLString },
    numofadditions: { type: GraphQLString },
    trialsites: { type: GraphQLString },
    laidonha: { type: GraphQLString },
    exampercent: { type: GraphQLString },
    numsperha: { type: GraphQLString },
    survivalrate: { type: GraphQLString },
    admixtureunits: { type: GraphQLString },
    admixtureha: { type: GraphQLString },
    meanheight: { type: GraphQLString },
    heightincrease: { type: GraphQLString },
    deathreason_id: { type: GraphQLString },
    squaredeviation: { type: GraphQLString },
    deviationreason_id: { type: GraphQLString },
    successrate_id: { type: GraphQLString },
    location: { type: GraphQLString },
    shortanalysis: { type: GraphQLString },
    executor_id: { type: GraphQLString },
    controller_id: { type: GraphQLString },
    alighner_id: { type: GraphQLString },
    inspectiondate: { type: GraphQLString },
    cropcomposition: {
      type: new GraphQLList(cropcomp_list),
      resolve: forestcrop_id => getCropcomp(forestcrop_id)
    },
    totalcomposition: {
      type: new GraphQLList(totalcomp_list),
      resolve: forestcrop_id => getTotalcomp(forestcrop_id)
    },
    mixcomposition: {
      type: new GraphQLList(mixcomp_list),
      resolve: forestcrop_id => getMixcomp(forestcrop_id)
    },
  })
});

export const ForestcropType = new GraphQLObjectType({
  name: "Forestcrop",
  fields: {
    forestcrops: {
      type: new GraphQLList(forestcrops_list),
      resolve: () => getForestcrops()
    }
  }
});


const getForestcrops = () => {
  return new Promise((resolve, reject) => {
    pool.connect(function (err, client, done) {
      if (err) {
        return console.error('error fetching client from pool', err)
      }
      client.query(`SELECT forestcrop_id, oblast_id, leshoz_id, forestry_id, block_id, stand_id, lot_num, leshozlotsquare, 
                  landtype_id, relief_id, exposition_id, soiltype_id, soddegree_id, crowndensity_id, underbrush_id, soilpreparation_id,
                  productionway_id, prodyear, seasontime_id, mainwoodspecies_id, mainprocent, shiftlayout_id, distanceinrow, distancebetweenrows,
                  minplantingage, maxplantingage, sownseeds, numofadditions, trialsites, laidonha, exampercent, numsperha, survivalrate, admixtureunits,
                  admixtureha, meanheight, heightincrease, deathreason_id, squaredeviation, deviationreason_id, successrate_id, location, shortanalysis,
                  executor_id, controller_id, alighner_id, inspectiondate
                  FROM inv.forestcrop`, function (err, result) {
        done()
        if (err) {
          return reject(console.error('error happened during query', err))
        }
        resolve(result.rows)
      })
    })
  }
  )
}


const getCropcomp = (forestcrop) => {
  console.log(forestcrop.forestcrop_id)
  return new Promise((resolve, reject) => {
    pool.connect(function (err, client, done) {
      if (err) {
        return console.error('error fetching client from pool', err)
      }
      client.query('SELECT cropcomposition_id, woodspecies_id, forestcrop_id, species_percent FROM inv.cropcomposition WHERE forestcrop_id =' + forestcrop.forestcrop_id, function (err, result) {
        done()
        if (err) {
          return reject(console.error('error happened during query', err))
        }
        resolve(result.rows)
      })
    })
  }
  )
}

const getTotalcomp = (forestcrop) => {
  return new Promise((resolve, reject) => {
    pool.connect(function (err, client, done) {
      if (err) {
        return console.error('error fetching client from pool', err)
      }
      client.query('SELECT totalcomposition_id, woodspecies_id, forestcrop_id, species_percent FROM inv.totalcomposition WHERE forestcrop_id =' + forestcrop.forestcrop_id, function (err, result) {
        done()
        if (err) {
          return reject(console.error('error happened during query', err))
        }
        resolve(result.rows)
      })
    })
  }
  )
}

const getMixcomp = (forestcrop) => {
  return new Promise((resolve, reject) => {
    pool.connect(function (err, client, done) {
      if (err) {
        return console.error('error fetching client from pool', err)
      }
      client.query('SELECT mixcomposition_id, woodspecies_id, forestcrop_id, species_percent FROM inv.mixcomposition WHERE forestcrop_id =' + forestcrop.forestcrop_id, function (err, result) {
        done()
        if (err) {
          return reject(console.error('error happened during query', err))
        }
        resolve(result.rows)
      })
    })
  }
  )
}
// const getOblastList = () => {
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