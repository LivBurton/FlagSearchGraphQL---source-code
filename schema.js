const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLSchema,
} = require('graphql');

const axios = require('axios');

const CountryType = new GraphQLObjectType({
  name: 'Country',
  fields: () => ({
    name: { type: GraphQLString },
    alpha2Code: { type: GraphQLString },
    capital: { type: GraphQLString },
    region: { type: GraphQLString },
    subregion: { type: GraphQLString },
    population: { type: GraphQLInt },
    flag: { type: GraphQLString },
    demonym: { type: GraphQLString },
    nativeName: { type: GraphQLString },
  }),
});

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    countries: {
      type: new GraphQLList(CountryType),
      resolve(parent, args) {
        return axios
          .get('https://restcountries.eu/rest/v2/all')
          .then(res => res.data);
      },
    },
    country: {
      type: new GraphQLList(CountryType),
      args: {
        name: { type: GraphQLString },
      },
      resolve(parent, args) {
        return axios
          .get(`https://restcountries.eu/rest/v2/name/${args.name}`)
          .then(res => res.data);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: QueryType,
});
