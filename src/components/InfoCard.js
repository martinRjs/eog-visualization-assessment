import React from 'react';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Query } from 'react-apollo'
import queries from '../store/api/queries';

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

const InfoCard = ({ name, display, toggle }) => {
  const classes = useStyles();
  return (
    <Card className={display ? classes.infoCard : classes.disabledCard} onClick={() => toggle(name)}>
      <CardContent>
        <Typography>{name}</Typography>
        {
          display ?
            <Query query={queries[name]} pollInterval={1300}>
              {({ loading, error, data }) => {
                if (loading) return "Loading...";
                if (error) return `Error! ${error.message}`;

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