import { GraphQLObjectType, GraphQLString, GraphQLFloat, GraphQLList, graphql, GraphQLInt } from "graphql";
import { Pool } from 'pg'

const conString = 'postgres://postgres:@192.168.20.78/forest_bd'
const pool = new Pool({
  connectionString: conString
});


const block_list = new GraphQLObjectType({
  name: "block_list",
  fields: () => ({
    gid: { type: GraphQLString },
    geom: { type: GraphQLString },
    forestry_id: { type: GraphQLString },
    block_num: { type: GraphQLString },
    stand_list: {
      type: new GraphQLList(stand_list),
      resolve: gid => getStandList(gid)
    },
  })
});

const stand_list = new GraphQLObjectType({
  name: "stand_list",
  fields: () => ({
    gid: { type: GraphQLString },
    geom: { type: GraphQLString },
    leshoz_num: { type: GraphQLString },
    block_num: { type: GraphQLString },
    forestry_num: { type: GraphQLString },
    stand_code: { type: GraphQLString },
    stand_num: { type: GraphQLString },
  })
});


export const ForestryType = new GraphQLObjectType({
  name: "Forestry",
  fields: {
    blocks: {
      type: new GraphQLList(block_list),
      // resolve: id => getBlockList(id)
      resolve: (parent, args) => console.log(args)
    }
  }
});


const getBlockList = (forestry) => {
  console.log(forestry.id)
  return new Promise((resolve, reject) => {
    pool.connect(function (err, client, done) {
      if (err) {
        return console.error('error fetching client from pool', err)
      }
      client.query('SELECT gid, block_num, forestry_id FROM forest.block WHERE forestry_id =' + forestry.id, function (err, result) {
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


const getStandList = (block) => {
  return new Promise((resolve, reject) => {
    pool.connect(function (err, client, done) {
      if (err) {
        return console.error('error fetching client from pool', err)
      }
      client.query('SELECT gid, leshoz_num, block_num, forestry_num, stand_num FROM forest.stand WHERE block_id =' + block.gid, function (err, result) {
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