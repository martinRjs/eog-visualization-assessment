import React from 'react';
import { getPastMeasurements } from '../store/api/queries';
import { useQuery } from '@apollo/react-hooks';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';


const Chart = ({ name, after }) => {

  const { loading, error, data } = useQuery(getPastMeasurements, {
    variables: {
      metricName: name,
      after: after
    },
  }
  );

  if (loading) {
    return <div>loading</div>;
  }
  if (error) {
    return <div>error</div>;
  }

  debugger;
  console.log(name);
  console.log(data);

  return (
    <LineChart width={800} height={500} data={data.getMultipleMeasurements[0].measurements}>
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="at" />
      <YAxis />
      <Line type="monotone" dataKey="value" stroke="#8884d8" dot={false} />
    </LineChart>
  );
};


export default Chart;