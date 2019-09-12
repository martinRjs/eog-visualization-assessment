import React from 'react';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography';


const InfoCard = () => {
  return (
    <Card>
    <CardContent>
      <Typography>FlareTemp</Typography>
      <Typography variant="h4">408.91</Typography>
    </CardContent>
  </Card>
  );
}


export default InfoCard;