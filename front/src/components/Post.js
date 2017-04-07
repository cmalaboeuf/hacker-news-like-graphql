import React from 'react'
import { withRouter } from 'react-router'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import styled from 'styled-components'

class Post extends React.Component {

  static propTypes = {
    router: React.PropTypes.object.isRequired,
    mutate: React.PropTypes.func.isRequired,
    post: React.PropTypes.object,
  }

  state = {
    url: '',
    title : 'toto'
  }

  render () {
    return (
      <div>
        <span><a href={this.props.post.url}>{this.props.post.title}</a>| vote {this.props.post.vote}</span> <button onClick={this.handleVote}>+</button>
      </div>
    )
  }

  handleVote = () => {
    console.log("plop");
    const {vote} = this.state;
    const _id = this.props.post._id;
    this.props.mutate({variables: {data : {_id}}},  {forceFetch: true})
      .then(() => {
        this.props.router.replace('/')
      })
  }

  handleCancel = () => {
    this.props.router.replace('/')
  }
}

const UpVotePostMutation = gql`mutation upVote ($data: PostInput!) { upVote(data:$data) }`

const PostWithMutation = graphql(UpVotePostMutation)(withRouter(Post))

export default PostWithMutation
