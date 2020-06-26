import { GraphQLObjectType, GraphQLString, GraphQLFloat, GraphQLList } from "graphql";
import { Pool } from 'pg'

const conString = 'postgres://postgres:@192.168.20.78/forest_bd'
const pool = new Pool({
  connectionString: conString
});

const oblast_list = new GraphQLObjectType({
  name: "oblast_list",
  fields: () => ({
    oblast_id: { type: GraphQLString },
    oblast_ru: { type: GraphQLString },
    oblast_ky: { type: GraphQLString },
    oblast_en: { type: GraphQLString },
    geom: { type: GraphQLString },
    leshoz_list: {
      type: new GraphQLList(leshoz_list),
      resolve: oblast_id => getLeshozList(oblast_id)
    },


  })
});

const leshoz_list = new GraphQLObjectType({
  name: "leshoz_list",
  fields: () => ({
    leshoz_id: { type: GraphQLString },
    leshoz_ru: { type: GraphQLString },
    geom: { type: GraphQLString },
    leshoztype_id: { type: GraphQLString },
    forestries_list: {
      type: new GraphQLList(forestries_list),
      resolve: leshoz_id => getForestriesList(leshoz_id)
    },
  })
});

const forestries_list = new GraphQLObjectType({
  name: "forestries_list",
  fields: () => ({
    gid: { type: GraphQLString },
    geom: { type: GraphQLString },
    forestry_ru: { type: GraphQLString },
    forestry_num: { type: GraphQLString },
    forestrytype_id: { type: GraphQLString },
    // block_list: {
    //   type: new GraphQLList(block_list),
    //   resolve: gid => getBlockList(gid)
    // },
  })
});

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


export const AllplacesType = new GraphQLObjectType({
  name: "Allplaces",
  fields: {
    oblasts: {
      type: new GraphQLList(oblast_list),
      resolve: () => getOblastList()
    }
  }
});


const getOblastList = () => {
  return new Promise((resolve, reject) => {
    pool.connect(function (err, client, done) {
      if (err) {
        return console.error('error fetching client from pool', err)
      }
      client.query('SELECT oblast_id, oblast_ru FROM topo.oblast', function (err, result) {
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

const getLeshozList = (gid) => {
  return new Promise((resolve, reject) => {
    pool.connect(function (err, client, done) {
      if (err) {
        return console.error('error fetching client from pool', err)
      }
      client.query('SELECT leshoz_id, leshoz_ru, leshoztype_id FROM forest.leshoz WHERE oblast_id =' + gid.oblast_id, function (err, result) {
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

const getForestriesList = (leshoz) => {
  return new Promise((resolve, reject) => {
    pool.connect(function (err, client, done) {
      if (err) {
        return console.error('error fetching client from pool', err)
      }
      client.query('SELECT gid, forestry_ru, forestrytype_id, forestry_num FROM forest.forestry WHERE leshoz_id =' + leshoz.leshoz_id, function (err, result) {
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