import React from 'react'
import { withRouter } from 'react-router'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import styled from 'styled-components'

const Button = styled.div`
  background-color: ${props => props.save ? '#2BC3A1' : ''};
  color: ${props => props.save ? 'white' : '#A3A3A3'};
  height: 48px;
  line-height: 1;
  font-size: 18px;
  padding: 15px 30px;
  cursor: pointer;
  font-weight: 300;
  border-radius: 4px`

const Card = styled.div`
  background-color: white;
  box-shadow: 0 1px 11px 0 rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  padding: 20px;
`

class AddPost extends React.Component {

  static propTypes = {
    router: React.PropTypes.object.isRequired,
    mutate: React.PropTypes.func.isRequired,
  }

  state = {
    url: '',
    title : 'toto'
  }

  render () {
    return (
      <div className='w-100 pa4 flex justify-center'>
        <Card style={{ maxWidth: 400 }}>
          <input
            className='w-100 pa3 mv2'
            value={this.state.url}
            placeholder='Url'
            onChange={(e) => this.setState({url: e.target.value})}
          />
          <div className='flex justify-between'>
            <Button onClick={this.handleCancel}>Cancel</Button>
            {this.canSave()
              ? <Button save onClick={this.handleSave}>Save</Button>
              : <Button disabled>Save</Button>
            }
          </div>
        </Card>
      </div>
    )
  }

  canSave = () => {
    return this.state.url
  }

  handleSave = () => {
    const {url,title} = this.state;
    this.props.mutate({variables: {data : {url,title}}})
      .then(() => {
        this.props.router.replace('/')
      })
  }

  handleCancel = () => {
    this.props.router.replace('/')
  }
}

const createPostMutation = gql`mutation ($data: PostInput!) { addPost(data:$data) }`

const AddPostWithMutation = graphql(createPostMutation)(withRouter(AddPost))

export default AddPostWithMutation
