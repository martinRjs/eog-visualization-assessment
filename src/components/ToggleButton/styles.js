import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  toggleButton: {
    outline: 'none',
    border: 'none',
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    color: '#fff',
    fontSize: '20px',
    '&:hover': {
      cursor: 'pointer'
    }
  }
});
