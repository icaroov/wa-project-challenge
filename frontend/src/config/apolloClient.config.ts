import { HttpLink, from, ApolloClient, InMemoryCache } from '@apollo/client'
import { onError } from '@apollo/client/link/error'

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    )
  if (networkError) console.log(`[Network error]: ${networkError}`)
})

const link = from([
  errorLink,
  new HttpLink({ uri: 'http://localhost:5000/graphql' }),
])

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache({
    typePolicies: {
      Student: {
        keyFields: ['name', 'email'],
      },
    },
  }),
})
