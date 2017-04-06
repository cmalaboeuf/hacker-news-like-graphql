import React from 'react'
import ReactDOM from 'react-dom'
import HackerNews from './components/HackerNews'
import AddPost from './components/AddPost';
import { Router, Route, browserHistory } from 'react-router'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import 'tachyons'
import './index.css'

const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'http://localhost:8080/graphql'}),
})

ReactDOM.render((
  <ApolloProvider client={client}>
    <Router history={browserHistory}>
      <Route path='/' component={HackerNews} />
       <Route path='/create' component={AddPost} />
    </Router>
  </ApolloProvider>
  ),
  document.getElementById('root')
)
