import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
  GraphQLInt
} from 'graphql';

export default new GraphQLObjectType({
  name: 'Post',
  fields: {
    _id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    title: {
      type: GraphQLString
    },
    url: {
      type: GraphQLString
    },
    vote: {
      type: GraphQLInt
    }
  }
});
