import {
  GraphQLNonNull,
  GraphQLBoolean
} from 'graphql';

import postInputType from '../../types/post-input';
import PostModel from '../../../models/post';

export default {
  type: GraphQLBoolean,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(postInputType)
    }
  },
  async resolve(root, params, options) {
    const postModel = new PostModel(params.data);
    await postModel.update({ $inc: { vote: 1}}).exec();
    return true;
  }
};
