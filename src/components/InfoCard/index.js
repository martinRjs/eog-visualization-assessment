import React from 'react';
import ToggleButton from '../ToggleButton/';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography';
import { Query } from 'react-apollo'
import { getLastMeasurement } from '../../store/api/queries';
import { useStyles } from './styles';


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