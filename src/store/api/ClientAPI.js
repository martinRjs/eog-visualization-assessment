import ApolloClient from 'apollo-boost';

const Client = new ApolloClient({
  uri: 'https://react.eogresources.com/graphql'
});

export default Client;