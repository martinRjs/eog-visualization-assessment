import React from 'react';
import { getPastMeasurements } from '../store/api/queries';
import { useQuery } from '@apollo/react-hooks';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import CustomTooltip from './CustomTooltip';

const dateFormatter = (t) => {
  const [h, m, rest] = new Date(t).toLocaleTimeString().split(':');
  const sufix = rest.split(' ')[1];
  return `${h}:${m} ${sufix.toLowerCase()}`;
}

const Chart = ({ chart, after, showError }) => {
  const { loading, error, data } = useQuery(getPastMeasurements, {
    variables: {
      metricName: chart.activeMetric,
      after: after
    },
  });

  if (loading) {
    return <code>loading . . .</code>;
  }
  if (error) {
      showError(error);
      return "Error loading data"; 
  }

  const measurements = data.getMultipleMeasurements[0].measurements;

  return chart.activeMetric === '' ? <code>Select one of the options above</code> :
    <>
      <h2>{chart.activeMetric}</h2>
      <ResponsiveContainer width="100%" height={300} >
        <LineChart data={measurements} >
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="at" interval="preserveStartEnd" tickFormatter={dateFormatter} minTickGap={20} />
          <YAxis label={{ value: `unit: ${measurements[0].unit}`, angle: -90, position: 'insideLeft' }} />
          <Legend />
          <Tooltip content={<CustomTooltip />} />
          <Line type="monotone" dataKey="value" stroke="#be2edd" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </>
};


export default Chart;