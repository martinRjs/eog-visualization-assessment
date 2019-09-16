import gql from 'graphql-tag';

export const getLastMeasurement  = gql`
query($metricName: String!) {
  getLastKnownMeasurement(metricName: $metricName) {
    metric,
    value,
    at
  }
}
`;


export const getPastMeasurements = gql`
query($metricName: String! $after: Timestamp!) {
  getMultipleMeasurements(input: {metricName: $metricName after: $after}) {
    metric,
   	measurements {
      metric,
      value,
      at,
      unit
    }
  }
}
`;