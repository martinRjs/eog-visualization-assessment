import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  tooltip: {
    backgroundColor: '#fff',
    padding: '5px 10px',
    borderRadius: '5px',
    fontSize: '12px',
    margin: 0,
    '&  strong': {
      fontWeight: '500'
    }
  }
});