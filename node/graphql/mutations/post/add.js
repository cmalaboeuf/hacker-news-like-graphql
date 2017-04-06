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
  async resolve (root, params, options) {
    const postModel = new PostModel(params.data);
    const newBlogPost = await postModel.save();

    if (!newBlogPost) {
      throw new Error('Error adding new blog post');
    }
    return true;
  }
};
