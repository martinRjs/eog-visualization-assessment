import React, { useEffect } from 'react';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { getLastKnownMeasurement } from '../store/api/metricsAPI';

const useStyles = makeStyles({
  infoCard: {
    backgroundColor: '#f9ca24',
    color: 'white',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  disabledCard: {
    backgroundColor: '#f6e58d',
    color: '#535c68',
    '&:hover': {
      cursor: 'pointer'
    }
  }
});

const InfoCard = ({ name, display, currentValue, toggle, update }) => {
  const classes = useStyles();

  useEffect(() => {
    let interval = 0;
    
    if (display) {
      interval = setInterval(() => {
        getLastKnownMeasurement(name).then(({ data }) => {
          update(name, data.getLastKnownMeasurement.value)
        });
      }, 1500);
    }

    return () => clearInterval(interval);

  }, [name, display, currentValue]);

  return (
    <Card className={display ? classes.infoCard : classes.disabledCard} onClick={() => toggle(name)}>
      <CardContent>
        <Typography>{name}</Typography>
        {
          display ? <Typography variant="h4">{currentValue}</Typography> :
            <Typography variant="h4">{currentValue}</Typography>
        }
      </CardContent>
    </Card>
  );
}

export default InfoCard;