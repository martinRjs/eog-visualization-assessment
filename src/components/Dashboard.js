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
    gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr));',
    gridGap: '5px'
  }
});


function getTimestamp() {
  let currentDate = new Date();
  currentDate.setMinutes(currentDate.getMinutes() - 2);
  return currentDate.getTime();
}
const Dashboard = ({ metrics, chart, toggle, setData, updateValues }) => {
  const classes = useStyles();
  return (
    <ApolloProvider client={client}>
      <Container>
        <h1>Dashboard</h1>
        <div className={classes.cardContainer}>
          {Object.keys(metrics).map((name, i) =>
            <InfoCard key={i} {...metrics[name]} toggle={toggle} setData={setData} updateValues={updateValues} />
          )}
        </div>
        <Chart chart={chart} name="tubingPressure" after={getTimestamp()}/>
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
    type: actions.METRIC_TOGGLE,
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

