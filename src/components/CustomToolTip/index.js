import React from 'react';
import {useStyles} from './styles';


const CustomTooltip = ({ payload }) => {
  const classes = useStyles();
  
  const data = payload ? payload.length > 0 ? payload[0].payload : null : null;
  const units = data ? data.units : null;

  return data ? (<div className={classes.tooltip}>
    <p>{new Date(data.at).toLocaleTimeString()}</p>
    {
      Object.keys(data).filter(key => key !== 'at' && key !== 'units').map((key, i) => {
        return <div key={i}><strong>{key}:</strong>{` ${data[key]} ${units[key]}`}</div>;
      })
    }
  </div>) : null;
}

export default CustomTooltip;