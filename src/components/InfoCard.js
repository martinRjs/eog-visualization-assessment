import React from 'react';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Query } from 'react-apollo'
import { getLastMeasurement } from '../store/api/queries';
import '../../src/App.css';

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

const InfoCard = ({ name, display, toggle, setData, updateValues }) => {
  const classes = useStyles();
  return (
    <Card className={display ? classes.infoCard : classes.disabledCard}>
      <CardContent>
        <Typography>{name}</Typography>
        <button onClick={() => toggle(name)}>On</button>
        {
          display ?
            <Query query={getLastMeasurement} pollInterval={1300} variables={{ metricName: name }}>
              {({ loading, error, data }) => {
                if (loading) return "Loading...";
                if (error) return `Error! ${error.message}`;
                updateValues(name, data.getLastKnownMeasurement.value);
                return (
                  <span>
                    <Typography variant="h4">{data.getLastKnownMeasurement.value}</Typography>
                  </span>
                );
              }}
            </Query> :
            <Typography variant="h4">-</Typography>
        }
      </CardContent>
    </Card>
  );
}

export default InfoCard;