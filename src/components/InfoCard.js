import React from 'react';
import ToggleButton from './ToggleButton';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Query } from 'react-apollo'
import { getLastMeasurement } from '../store/api/queries';
import '../../src/App.css';


const useStyles = makeStyles({
  baseCard: {
    color: '#fff',
    '&:hover': {
      cursor: 'pointer',
    }
  },
  infoCard: {
    backgroundColor: '#f9ca24'
  },
  disabledCard: {
    backgroundColor: '#f6e58d',
    color: '#535c68'
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  paddingRight: {
    paddingRight: '5px'
  }
});

const InfoCard = ({ name, display, toggle, showError }) => {
  const classes = useStyles();
  return (
    <Card className={`${classes.baseCard} ${display ? classes.infoCard : classes.disabledCard}`} onClick={() => toggle(name)}>
      <CardContent className={classes.paddingRight}>
        <div className={classes.cardHeader}>
          <Typography>{name}</Typography>
          <ToggleButton toggle={toggle} name={name} display={display} />
        </div>
        {
          display ?
            <Query query={getLastMeasurement} pollInterval={1300} variables={{ metricName: name }}>
              {({ loading, error, data }) => {
                if (loading) return "Loading...";
                if (error) {
                  showError(error);
                  return "Error loading data"; 
                }

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