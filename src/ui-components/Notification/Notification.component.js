import React from 'react';
import PropTypes from 'prop-types';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';
import { styles } from './Notification.styles';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(styles);

const variantIcon = {
    success: CheckCircleIcon,
    warning: WarningIcon,
    error: ErrorIcon,
    info: InfoIcon,
  };

  /**
   * Common compoenet to show any type of message on th UI top panel.
   * @param {*} props 
   */

const Notification = (props) =>{
    const { msg, open, handleClose, variant='error', ...other } = props;
    const Icon = variantIcon[variant];
    const classes = useStyles();

     return(
        <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal :'left'}}
        key={'topCenter'}
        open={open}
        className = {classes.snackBar}
      >
          <SnackbarContent
            className={classes[variant]}
            aria-describedby="client-snackbar"
            message={
              <span id="client-snackbar" className={classes.message}>
                <Icon className={classes.icon + ' '+ classes.iconVariant} />
                {msg}
              </span>
            }
            action={[
              <IconButton key="close" aria-label="close" color="inherit" onClick={handleClose}>
                <CloseIcon className={classes.icon} />
              </IconButton>,
            ]}
            {...other}
          />
      </Snackbar>
    )
}

Notification.defaultProps = {
    variant: 'error'
}

Notification.propTypes = {
    msg: PropTypes.string,
    handleClose: PropTypes.func,
    variant: PropTypes.oneOf(['error', 'info', 'success', 'warning']).isRequired,
};

export default Notification;