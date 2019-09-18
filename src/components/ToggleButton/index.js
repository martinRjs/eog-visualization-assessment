import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToggleOn } from '@fortawesome/free-solid-svg-icons/faToggleOn'
import { faToggleOff } from '@fortawesome/free-solid-svg-icons/faToggleOff'
import {useStyles} from './styles';


const ToggleButton = ({ display }) => {
  const classes = useStyles();
  return (
    <button className={classes.toggleButton} >
      {display ? <FontAwesomeIcon icon={faToggleOn} /> : <FontAwesomeIcon icon={faToggleOff} />}
    </button>
  )
};

export default ToggleButton;