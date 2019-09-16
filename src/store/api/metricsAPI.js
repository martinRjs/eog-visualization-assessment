import ApolloClient from 'apollo-boost';

const Client = new ApolloClient({
  uri: 'https://react.eogresources.com/graphql'
});

// export const getLastKnownMeasurement = async (metricName) => {
//   const response = await Client.query({
//     query: queries[metricName],
//     fetchPolicy: "network-only"
//   });

//   console.log(response);
//   return response;
// }

// export const getPastMeasurements = async (metricName) => {
//   const response = await Client.query({
//     query: pastMeasurements[metricName],
//     fetchPolicy: "network-only"
//   })

//   return response;
// } 

export default Client;