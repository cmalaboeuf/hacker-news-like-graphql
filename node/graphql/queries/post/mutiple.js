import {
  GraphQLList
} from 'graphql';

import postType from '../../types/post';
import getProjection from '../../get-projection';
import PostModel from '../../../models/post';

export default {
  type: new GraphQLList(postType),
  args: {},
  resolve (root, params, options) {
    const projection = getProjection(options.fieldASTs[0]);

    return PostModel
      .find()
      .select(projection)
      .exec();
  }
};
