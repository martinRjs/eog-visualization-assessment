import React from 'react';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

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

const LAST_MEASUREMENT = gql`
{
  getLastKnownMeasurement(metricName: "oilTemp") {
    metric,
    at
  }
}
`;

const InfoCard = ({ title, enabled, toggle}) => {

  useQuery(LAST_MEASUREMENT);


  const classes = useStyles();
  return (
    <Card className={enabled ? classes.infoCard : classes.disabledCard} onClick={() => toggle(title)}>
      <CardContent>
        <Typography>{title}</Typography>
        {
          enabled ? <Typography variant="h4">408.91</Typography> :
          <Typography variant="h4">OFF</Typography>
        }
      </CardContent>
    </Card>
  );
}

export default InfoCard;