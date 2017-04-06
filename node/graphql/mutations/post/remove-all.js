import {
  GraphQLBoolean
} from 'graphql';

import postModel from '../../../models/post';

export default {
  type: GraphQLBoolean,
  resolve (root, params, options) {
    return PostModel
      .remove({})
      .exec();
  }
};