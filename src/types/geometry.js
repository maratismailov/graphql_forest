import { GraphQLObjectType, GraphQLString, GraphQLFloat, GraphQLList } from "graphql";
import { Pool } from 'pg'

const conString = 'postgres://postgres:@192.168.20.78/forest_bd'
const pool = new Pool({
  connectionString: conString
});




const oblast_list_geometry = new GraphQLObjectType({
  name: "oblast_list_geometry",
  fields: () => ({
    oblast_id: { type: GraphQLString },
    oblast_ru: { type: GraphQLString },
    oblast_ky: { type: GraphQLString },
    oblast_en: { type: GraphQLString },
    geom: { type: GraphQLString },
    leshoz_list: {
      type: new GraphQLList(leshoz_list_geometry),
      resolve: oblast_id => getLeshozList(oblast_id)
    },
  })
});

export const GeometryType = new GraphQLObjectType({
  name: "Geometry",
  fields: {
    oblasts: {
      type: new GraphQLList(oblast_list_geometry),
      resolve: () => getOblastList()
    }
  }
});

const leshoz_list_geometry = new GraphQLObjectType({
  name: "leshoz_list_geometry",
  fields: () => ({
    leshoz_id: { type: GraphQLString },
    leshoz_ru: { type: GraphQLString },
    geom: { type: GraphQLString },
    leshoztype_id: { type: GraphQLString },
    forestries_list: {
      type: new GraphQLList(forestries_list_geometry),
      resolve: leshoz_id => getForestriesList(leshoz_id)
    },
  })
});

const forestries_list_geometry = new GraphQLObjectType({
  name: "forestries_list_geometry",
  fields: () => ({
    gid: { type: GraphQLString },
    geom: { type: GraphQLString },
    forestry_ru: { type: GraphQLString },
    forestry_num: { type: GraphQLString },
    forestrytype_id: { type: GraphQLString },
    block_list: {
      type: new GraphQLList(block_list_geometry),
      resolve: gid => getBlockList(gid)
    },
  })
});

const block_list_geometry = new GraphQLObjectType({
  name: "block_list_geometry",
  fields: () => ({
    gid: { type: GraphQLString },
    geom: { type: GraphQLString },
    forestry_id: { type: GraphQLString },
    block_num: { type: GraphQLString },
    stand_list: {
      type: new GraphQLList(stand_list_geometry),
      resolve: gid => getStandList(gid)
    },
  })
});

const stand_list_geometry = new GraphQLObjectType({
  name: "stand_list_geometry",
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


const getOblastList = () => {
  return new Promise((resolve, reject) => {
    pool.connect(function (err, client, done) {
      if (err) {
        return console.error('error fetching client from pool', err)
      }
      client.query('SELECT oblast_id, ST_AsGeoJSON(the_geom) AS geom, oblast_ru FROM topo.oblast', function (err, result) {
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
      client.query('SELECT leshoz_id, leshoz_ru, leshoztype_id, ST_AsGeoJSON(geom) AS geom FROM forest.leshoz WHERE oblast_id =' + gid.oblast_id, function (err, result) {
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
      client.query('SELECT gid,  ST_AsGeoJSON(the_geom) AS geom, forestry_ru, forestrytype_id, forestry_num FROM forest.forestry WHERE leshoz_id =' + leshoz.leshoz_id, function (err, result) {
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


const getBlockList = (forestry) => {
  return new Promise((resolve, reject) => {
    pool.connect(function (err, client, done) {
      if (err) {
        return console.error('error fetching client from pool', err)
      }
      client.query('SELECT gid, ST_AsGeoJSON(the_geom) AS geom, block_num, forestry_id FROM forest.block WHERE forestry_id =' + forestry.gid, function (err, result) {
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
      client.query('SELECT gid, ST_AsGeoJSON(the_geom) AS geom, leshoz_num, block_num, forestry_num, stand_code , stand_num FROM forest.stand WHERE block_id =' + block.gid, function (err, result) {
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