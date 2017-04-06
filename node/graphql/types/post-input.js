import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt
} from 'graphql';

export default new GraphQLInputObjectType({
  name: 'PostInput',
  fields: {
    _id: {type: GraphQLID},
    title: {type: GraphQLString},
    vote: {type: GraphQLInt}
  }
});
