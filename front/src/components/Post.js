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
    vote:null,
  }

  render () {
    if(this.state.vote === null){
      this.state.vote = this.props.post.vote;
    }
    return (
      <div>
        <span><a href={this.props.post.url}>{this.props.post.title}</a>| vote {this.state.vote}</span> <button onClick={this.handleVote}>+</button>
      </div>
    )
  }

  handleVote = () => {
    const {vote} = this.state;
    const _id = this.props.post._id;   
    this.props.mutate({variables: {data : {_id}}},  {forceFetch: true},)
      .then(() => {
        this.setState({vote : vote +1});       
      })    
  }

  handleCancel = () => {
    this.props.router.replace('/')
  }
}

const UpVotePostMutation = gql`mutation upVote ($data: PostInput!) { upVote(data:$data) }`

const PostWithMutation = graphql(UpVotePostMutation)(withRouter(Post))

export default PostWithMutation
