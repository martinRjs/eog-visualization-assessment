import React from 'react';
import { getPastMeasurements } from '../store/api/queries';
import { useQuery } from '@apollo/react-hooks';
import { makeStyles } from '@material-ui/core/styles';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const useStyles = makeStyles({
  tooltip: {
    backgroundColor: '#fff',
    padding: '5px 10px',
    margin: 0
  }
});

const CustomTooltip = ({payload, label}) => {
  const classes = useStyles();
  const data = payload.length > 0 ? payload[0].payload : null
  console.log(label);
  console.log(data);


  return (
    <div className={classes.tooltip}>
      <p>{data ? new Date(data.at).toLocaleTimeString() : null}</p>
      <span>{data ? data.metric : null}: {data ? data.value : null}</span><br />
      <span>unit: {data ? data.unit : null}</span>
    </div>
  );
};

const Chart = ({ chart, after }) => {
  const { loading, error, data } = useQuery(getPastMeasurements, {
    variables: {
      metricName: chart.activeMetric,
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

  console.log(data.getMultipleMeasurements[0].measurements);
  return chart.activeMetric === "" ? <span>no option</span> :
    <>
      <h2>{chart.activeMetric}</h2>
      <ResponsiveContainer width={900} height={200} >
        <LineChart data={data.getMultipleMeasurements[0].measurements} >
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="at" />
          <YAxis />
          <Legend />
          <Tooltip content={<CustomTooltip />}/>
    

          <Line type="monotone" dataKey="value" stroke="#be2edd" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </>
};


export default Chart;