const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')
const schema = require('./schema.js')
const axios = require('axios')

const app = express()

const PORT = process.env.PORT || 4000

// const schema = buildSchema(`
//   type Query {
//     hello: String
//   }
// `)

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    // rootValue: root,
    graphiql: true,
  })
)

// const dob = () => {
//   return axios.get('https://api.spacexdata.com/v5/launches').then((res) => {
//     res
//     console.log(res.data[0])
//     console.log('fuck you')
//   })
// }
// dob()
app.listen(PORT, () => console.log(`server go on ${PORT}`))
