import { ApolloProvider } from '@apollo/client'

import { client } from './config/apolloClient.config'
import ListUsers from './components/ListUsers'

import './App.css'

function App() {
  return (
    <ApolloProvider client={client}>
      <ListUsers />
    </ApolloProvider>
  )
}

export default App
