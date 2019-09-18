import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  tooltip: {
    backgroundColor: '#fff',
    padding: '5px 10px',
    borderRadius: '5px',
    fontSize: '12px',
    margin: 0,
    '&  strong': {
      fontWeight: '500'
    }
  }
});

const CustomTooltip = ({ payload }) => {
  const classes = useStyles();
  const data = payload.length > 0 ? payload[0].payload : null;
  const units = data ? data.units : null;

  return data ? <div className={classes.tooltip}>
    <p>{new Date(data.at).toLocaleTimeString()}</p>
    {
      Object.keys(data).filter(key => key !== 'at' && key !== 'units').map((key, i) => {
        debugger;
        return <><span key={i}><strong>{key}:</strong>{` ${data[key]} ${units[key]}`}</span><br /></>;
      })
    }
  </div> : null;
}

export default CustomTooltip;