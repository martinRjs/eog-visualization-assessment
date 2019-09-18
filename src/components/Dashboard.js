import React from 'react';
import Container from '@material-ui/core/Container';
import InfoCard from './InfoCard/';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import * as actions from "../store/actions";
import client from '../store/api/metricsAPI';
import { ApolloProvider } from '@apollo/react-hooks';
import Chart from './Chart/';
import { selectActiveMetrics } from '../store/reducers/Metrics';

const useStyles = makeStyles({
  cardContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr));',
    gridGap: '5px',
    marginBottom: '25px'
  }
});

const Dashboard = ({ metrics, activeMetrics, toggle, setData, updateValues, setActive, showError }) => {
  const classes = useStyles();
  return (
    <ApolloProvider client={client}>
      <Container>
        <h1>Dashboard</h1>
        <div className={classes.cardContainer}>
          {Object.keys(metrics).map((name, i) =>
            <InfoCard key={i} 
              {...metrics[name]} 
              toggle={toggle} 
              setData={setData} 
              updateValues={updateValues} 
              setActive={setActive}
              showError={showError}
            />
          )}
        </div>
        <Chart activeMetrics={activeMetrics} showError={showError}/>
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
  toggle: (name) => dispatch({
    type: actions.METRIC_TOGGLE_FETCH,
    name
  }),
  setData: (name, data) => dispatch({
    type: actions.CHART_ADD_DATA,
    name,
    data
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

