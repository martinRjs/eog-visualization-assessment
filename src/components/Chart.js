import React, {useState, useEffect } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import CustomTooltip from './CustomTooltip';
import { getMeasurements } from '../store/api/metricsAPI';

const dateFormatter = (t) => {
  const [h, m, rest] = new Date(t).toLocaleTimeString().split(':');
  const sufix = rest.split(' ')[1];
  return `${h}:${m} ${sufix.toLowerCase()}`;
}

function getTimestamp() {
  let currentDate = new Date();
  currentDate.setMinutes(currentDate.getMinutes() - 10);
  return currentDate.getTime();
}

const colors = [
  '#16a085',
  '#16a085',
  '#2980b9',
  '#8e44ad',
  '#34495e',
  '#c0392b' 
]

const Chart = ({activeMetrics, showError }) => {
  const time = getTimestamp();

  const [measurements, setMeasurements] = useState([]);

  useEffect(() => {
    getMeasurements(activeMetrics, time).then(data => {
      setMeasurements(data)
    }).catch(error => showError(error));
  }, [activeMetrics]);

  
  return (
    <>
      <ResponsiveContainer width="100%" height={350} >
        <LineChart data={measurements} >
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="at" interval="preserveStartEnd" tickFormatter={dateFormatter} minTickGap={20} />
          <YAxis label={{ value: 'values', angle: -90, position: 'insideLeft' }} />
          <Tooltip content={<CustomTooltip />} /> 
          <Legend />
          { activeMetrics.map((metric, i) => <Line type="monotone" dataKey={metric} stroke={colors[i]} dot={false} key={metric}/>)}
        </LineChart>
      </ResponsiveContainer>
    </>
  )
};


export default Chart;