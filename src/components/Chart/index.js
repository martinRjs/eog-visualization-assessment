import React, { useState, useEffect } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import CustomTooltip from '../CustomToolTip';
import { getMeasurements } from '../../store/api/metricsAPI';
import { getTimestamp, dateFormatter, colors } from '../../utils';

const Chart = ({ activeMetrics, showError }) => {
  const time = getTimestamp();

  const [measurements, setMeasurements] = useState([]);

  useEffect(() => {
    if (activeMetrics.length > 0) {
      getMeasurements(activeMetrics, time).then(data => {
        setMeasurements(data)
      }).catch(error => showError(error));
    }
  }, [activeMetrics, showError, time]);


  return activeMetrics.length > 0 ?
    (<ResponsiveContainer width="100%" height={350} >
      <LineChart data={measurements} >
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="at" interval="preserveStartEnd" tickFormatter={dateFormatter} minTickGap={20} />
        <YAxis label={{ value: 'values', angle: -90, position: 'insideLeft' }} />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        {activeMetrics.map((metric, i) => <Line type="monotone" dataKey={metric} stroke={colors[i]} dot={false} key={metric} />)}
      </LineChart>
    </ResponsiveContainer>) : null;
};


export default Chart;