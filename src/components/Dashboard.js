import React from 'react';
import Container from '@material-ui/core/Container';
import InfoCard from './InfoCard'
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import * as actions from "../store/actions";
import client from '../store/api/metricsAPI';
import { ApolloProvider } from '@apollo/react-hooks';

const useStyles = makeStyles({
  cardContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr));',
    gridGap: '5px'
  }
});


const Dashboard = ({ metrics, toggle, update }) => {

  const classes = useStyles();
  return (
    <ApolloProvider client={client}>
      <Container>
        <h1>Dashboard</h1>
        <div className={classes.cardContainer}>
          {Object.keys(metrics).map((name, i) =>
            <InfoCard key={i} {...metrics[name]} toggle={toggle} update={update}/>
          )}
        </div>
      </Container>
    </ApolloProvider>
  );
}

const mapStateToProps = state => ({
  metrics: state.metrics
});

const mapDispatchToProps = dispatch => ({
  toggle: (name) => dispatch({
    type: actions.METRIC_TOGGLE,
    name
  }),
  update: (name, value) => dispatch({
    type: actions.METRIC_UPDATE,
    name,
    value
  })
});

const ConnectedDashboard = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)

export default ConnectedDashboard;