import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToggleOn } from '@fortawesome/free-solid-svg-icons/faToggleOn'
import { faToggleOff } from '@fortawesome/free-solid-svg-icons/faToggleOff'

const useStyles = makeStyles({
  toggleButton: {
    outline: 'none',
    border: 'none',
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    color: '#fff',
    fontSize: '20px',
    '&:hover': {
      cursor: 'pointer !important'
    }
  }
});

const ToggleButton = ({ toggle, name, display }) => {
  const classes = useStyles();
  const toggleFetch = (e) => {
    toggle(name);
    debugger;
    e.stopPropagation();
  }
  return (
    <button className={classes.toggleButton} onClick={toggleFetch}>{
      display ? <FontAwesomeIcon icon={faToggleOn} /> : <FontAwesomeIcon icon={faToggleOff} />}
    </button>
  )
};

export default ToggleButton;