import ApolloClient from 'apollo-boost';
import { getPastMeasurements } from './queries';

const Client = new ApolloClient({
  uri: 'https://react.eogresources.com/graphql'
});

export const getMeasurements = async (activeMetrics, after) => {
  const promises = activeMetrics.map(metric => {
    return Client.query({
      query: getPastMeasurements,
      variables: { metricName: metric, after }
    });
  });

  const responses = await Promise.all(promises).then( data => {
    const metrics = data.map(data => data.data.getMultipleMeasurements[0].measurements);

    const metricsLength = metrics[0].length;
    const measurements = [];

    for(let i = 0; i < metricsLength; i++) {
      let obj = {};

      for(let j = 0; j < activeMetrics.length; j++) {
        const current = metrics[j][i];
        
        
        obj[current.metric] = current.value;

        if(!obj.at) {
          obj['at'] = current.at;
        }

        if(obj.units) {
          obj.units[current.metric] = current.unit
        } else {
          obj.units = {
            [current.metric]: current.unit
          }
        }
      }

      measurements.push(obj);
    }
    return measurements;
  });
  
  return responses;
}

export default Client;
 