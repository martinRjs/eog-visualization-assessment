import React, { useEffect } from 'react';
import Container from '@material-ui/core/Container';
import InfoCard from './InfoCard/';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import * as actions from "../store/actions";
import client from '../store/api/metricsAPI';
import { ApolloProvider } from '@apollo/react-hooks';
import Chart from './Chart/';
import { selectActiveMetrics } from '../store/reducers/Metrics';
import { getMetricLabels } from '../store/api/metricsAPI';

const useStyles = makeStyles({
  cardContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr));',
    gridGap: '5px',
    marginBottom: '25px'
  }
});

const Dashboard = ({ metrics, setMetricsCategories, activeMetrics, toggle, updateValues, setActive, showError }) => {
  const classes = useStyles();

  useEffect(() => {
    getMetricLabels().then(data => setMetricsCategories(data.data.getMetrics));
  }, []);

  return (
    <ApolloProvider client={client}>
      <Container>
        <h1>Dashboard</h1>
        <div className={classes.cardContainer}>
          {Object.keys(metrics).map((name, i) =>
            <InfoCard key={name}
              {...metrics[name]}
              toggle={toggle}
              updateValues={updateValues}
              setActive={setActive}
              showError={showError}
            />
          )}
        </div>
        <Chart activeMetrics={activeMetrics} showError={showError} />
      </Container>
    </ApolloProvider>
  );
}

const mapStateToProps = state => ({
  metrics: state.metrics,
  chart: state.chart,
  activeMetrics: selectActiveMetrics(state)
});

const mapDispatchToProps = dispatch => ({
  setMetricsCategories: (metrics) => dispatch({
    type: actions.METRIC_SET_CATEGORIES,
    metrics
  }),
  toggle: (name) => dispatch({
    type: actions.METRIC_TOGGLE_FETCH,
    name
  }),
  showError: (error) => dispatch({
    type: actions.API_ERROR,
    error
  })
});

const ConnectedDashboard = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);

export default ConnectedDashboard;

