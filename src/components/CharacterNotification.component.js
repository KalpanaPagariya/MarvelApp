import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Notification from '../ui-components/Notification';
import isEmpty from 'lodash';

/**
 * This component is used to to show notification for any success or failure
 * @param {*} props 
 */
const CharacterNotification = (props) => {
    const { notification = {} } = props;
    const [open, setOpen] = useState(false);

    useEffect(()=>{
        if(notification.msg){
            setOpen(true);
        }
    },[notification])

    const handleClose = () =>{
        setOpen(false);
    }

    return (
      <React.Fragment>
          <Notification msg={notification.msg} variant={notification.type} open={open} handleClose={handleClose}/>
      </React.Fragment>
    )
}

CharacterNotification.propTypes = {
    notification: PropTypes.shape({}),
}
export default CharacterNotification;