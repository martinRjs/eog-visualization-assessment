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

  return (
    <div className={classes.tooltip}>
      <p>{data ? new Date(data.at).toLocaleTimeString() : null}</p>
      <span>{data ? data.metric : null}: {data ? data.value : null}</span><br />
      <span>unit: {data ? data.unit : null}</span>
    </div>
  );
};

export default CustomTooltip;