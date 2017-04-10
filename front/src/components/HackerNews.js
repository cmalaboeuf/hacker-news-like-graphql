import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag';
import Post from './Post';

class HackerNews extends React.Component {
  static propTypes = {
    data: React.PropTypes.shape({
      loading: React.PropTypes.bool,
      error: React.PropTypes.object,
      posts: React.PropTypes.array,
    }).isRequired,
  }

  render () {
    if (this.props.data.loading) {
      return (<div>Loading</div>)
    }

    if (this.props.data.error) {
      console.log(this.props.data.error)
      return (<div>An unexpected error occurred</div>)
    }
    return (
      <div>
        <a href="/create">New</a>
        <div className=''>
          <div className='tc pa5'>
            <h3>There is {this.props.data.posts.length} news</h3>
            <ol>
            {this.props.data.posts.sort((prev,next)=>next.vote - prev.vote).map((post)=>
              <Post key={post._id} post={post} />
            )}
            </ol>
          </div>
        </div>
      </div>
    )
  }
}

const PostQuery = gql`query getPosts { posts { _id, title,url, vote } }`

const HackerNewsWithData = graphql(PostQuery)(HackerNews)

export default HackerNewsWithData
