import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
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