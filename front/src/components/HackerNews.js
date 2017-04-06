import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import styled from 'styled-components'

const Title = styled.div`
  color: #7F7F7F;
  font-size: 32px;
  font-weight: 300;
`

class HackerNews extends React.Component {

  static propTypes = {
    data: React.PropTypes.shape({
      loading: React.PropTypes.bool,
      error: React.PropTypes.object,
      Trainer: React.PropTypes.object,
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
      <div className='w-100 bg-light-gray min-vh-100'>
        <div className='tc pa5'>
          {this.props.data.posts.map((post)=>
          <div>{post.title}| vote {post.vote}</div>
          )}
        </div>
      </div>
    )
  }
}

const PostQuery = gql`query getPosts { posts { _id, title, vote } }`

const HackerNewsWithData = graphql(PostQuery)(HackerNews)

export default HackerNewsWithData
