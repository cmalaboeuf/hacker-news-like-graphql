import {
  GraphQLNonNull,
  GraphQLBoolean
} from 'graphql';

import postInputType from '../../types/post-input';
import PostModel from '../../../models/post';
import request from 'request';
import cheerio from 'cheerio';

export default {
  type: GraphQLBoolean,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(postInputType)
    }
  },
  async resolve (root, params, options) {
    if(params.data.url){
      params.data.title = await getWebsiteTitle(params.data.url)
    }
    params.data.vote =0;
    const postModel = new PostModel(params.data);
    const newBlogPost = await postModel.save();

    if (!newBlogPost) {
      throw new Error('Error adding new blog post');
    }
    return true;
  }
};

function getWebsiteTitle(url){
  return new Promise(function(resolve,reject){
    request(url, function(error, response, html){      
      if(!error){        
          var $ = cheerio.load(html);       
          resolve ($('title').text());
          }
      });
  });
}