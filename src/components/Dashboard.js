import React from 'react';
import Container from '@material-ui/core/Container';
import InfoCard from './InfoCard'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  cardContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr));',
    gridGap: '5px'
  }
})

const Dashboard = () => {

  const classes = useStyles();

  return (
    <Container>
      <h1>Dashboard</h1>
      <div className={classes.cardContainer}>
      <InfoCard />
      </div>
    </Container>)
}

export default Dashboard;