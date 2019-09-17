import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  tooltip: {
    backgroundColor: '#fff',
    padding: '5px 10px',
    margin: 0
  }
});

const CustomTooltip = ({ payload }) => {
  const classes = useStyles();
  const data = payload.length > 0 ? payload[0].payload : null;

  return data ? <div className={classes.tooltip}>
    <p>{new Date(data.at).toLocaleTimeString()}</p>
    <span>{data.metric}: {data.value}</span><br />
    <span>unit: {data.unit}</span>
  </div> : null
}

export default CustomTooltip;