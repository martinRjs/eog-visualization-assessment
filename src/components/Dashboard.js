import React from 'react';
import Container from '@material-ui/core/Container';
import InfoCard from './InfoCard'
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import * as actions from "../store/actions";
import client from '../store/api/metricsAPI';
import { ApolloProvider } from '@apollo/react-hooks';
import Chart from './Chart';

const useStyles = makeStyles({
  cardContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr));',
    gridGap: '5px',
    marginBottom: '25px'
  }
});


function getTimestamp() {
  let currentDate = new Date();
  currentDate.setMinutes(currentDate.getMinutes() - 30);
  return currentDate.getTime();
}
const Dashboard = ({ metrics, chart, toggle, setData, updateValues, setActive }) => {
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
              activeMetric={chart.activeMetric}
            />
          )}
        </div>
        <Chart chart={chart} after={getTimestamp()}/>
      </Container>
    </ApolloProvider>
  );
}

const mapStateToProps = state => ({
  metrics: state.metrics,
  chart: state.chart
});

const mapDispatchToProps = dispatch => ({
  toggle: (name) => dispatch({
    type: actions.METRIC_TOGGLE_FETCH,
    name
  }),
  setActive: (name) => dispatch({
    type: actions.CHART_SET_ACTIVE_METRIC,
    name
  }),
  setData: (name, data) => dispatch({
    type: actions.CHART_ADD_DATA,
    name,
    data
  }),
  updateValues: (value) => dispatch({
    type: "SAGA_TEST",
    value
  })
});

const ConnectedDashboard = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);

export default ConnectedDashboard;

