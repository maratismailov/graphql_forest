import { GraphQLObjectType, GraphQLString, GraphQLFloat, GraphQLList } from "graphql";
import { Pool } from 'pg'

const conString = 'postgres://postgres:@192.168.20.78/forest_bd'
const pool = new Pool({
  connectionString: conString
});

const site_list = new GraphQLObjectType({
  name: "site_list",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString }
  })
});

export const AllplacesType = new GraphQLObjectType({
  name: "Allplaces",
  fields: {
    sites: {
      type: new GraphQLList(site_list),
      resolve: () => getSites()
    }
  }
});

// { id: '1518203', name: 'Terenozek' },
// { id: '607551', name: 'Zhetibay' },
// { id: '1537162', name: 'Almaty Oblysy' },
// { id: '1512449', name: 'Uychi' },
// { id: '610686', name: 'Aqzhayyq' },
// { id: '1217007', name: 'Koson' },
// { id: '1519844', name: 'Rūdnīchnyy' },




const getSites = () => {
  return new Promise((resolve, reject) => {
    pool.connect(function (err, client, done) {
      if (err) {
        return console.error('error fetching client from pool', err)
      }
      client.query('SELECT name, id FROM cacip.sites', function (err, result) {
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
