import ApolloClient from 'apollo-boost';
import { gql } from 'apollo-boost';

const Client = new ApolloClient({
  uri: 'https://react.eogresources.com/graphql'
});


export const getLastKnownMeasurement = async (metricName) => {
  console.log({ metricName });

  const query = gql`
  {
    getLastKnownMeasurement(metricName: "waterTemp") {
      metric,
      at
    }
  }
  `;
  
  const response = await Client.query({
    query,
    variables: {
      metricName
    }
  });

  return response;
}

export default Client;