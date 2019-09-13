import { gql } from 'apollo-boost';


export const getLastMeasurement = gql`
{
  getLastKnownMeasurement(metricName: $name) {
    metric,
    value,
    at
  }
}
`;


const tubingPressureLastMeasurement = gql`
{
  getLastKnownMeasurement(metricName: "tubingPressure") {
    metric,
    value,
    at
  }
}
`;

const flareTempLastMeasurement = gql`
{
  getLastKnownMeasurement(metricName: "flareTemp") {
    metric,
    value,
    at
  }
}
`;

const injValveOpenLastMeasurement = gql`
{
  getLastKnownMeasurement(metricName: "injValveOpen") {
    metric,
    value,
    at
  }
}
`;

const oilTempLastMeasurement = gql`
{
  getLastKnownMeasurement(metricName: "oilTemp") {
    metric,
    value,
    at
  }
}
`;

const casingPressureLastMeasurement = gql`
{
  getLastKnownMeasurement(metricName: "casingPressure") {
    metric,
    value,
    at
  }
}
`;

const waterTempLastMeasurement = gql`
{
  getLastKnownMeasurement(metricName: "waterTemp") {
    metric,
    value,
    at
  }
}
`;


const LATEST_RESULTS = gql`
{
  getMultipleMeasurements(input: {metricName: "tubingPressure" after: $after}) {
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

export default {
  "tubingPressure": tubingPressureLastMeasurement,
  "flareTemp": flareTempLastMeasurement,
  "injValveOpen": injValveOpenLastMeasurement,
  "oilTemp": oilTempLastMeasurement,
  "casingPressure": casingPressureLastMeasurement,
  "waterTemp": waterTempLastMeasurement
}