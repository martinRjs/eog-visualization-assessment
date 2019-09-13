import { gql } from 'apollo-boost';


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


export default {
  "tubingPressure": tubingPressureLastMeasurement,
  "flareTemp": flareTempLastMeasurement,
  "injValveOpen": injValveOpenLastMeasurement,
  "oilTemp": oilTempLastMeasurement,
  "casingPressure": casingPressureLastMeasurement,
  "waterTemp": waterTempLastMeasurement
}