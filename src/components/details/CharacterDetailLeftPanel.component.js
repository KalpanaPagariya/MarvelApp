import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import CharacterDetail from './CharacterDetail.component';
import FavouritesButton from '../../containers/FavouritesButton.container';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import DialogTitle from '@material-ui/core/DialogTitle';

import { styles } from './styles';

const useStyles = makeStyles(styles);

/**
 * This component shows the overlay of character detail
 * @param {*} props 
 */
const CharacterDetailLeftPanel = (props) =>{
    const { characterDetail, onClosePanel, openPanel } = props;
    const classes = useStyles();

    /**
     * To close the overlay
     */
    const closePanel = () =>{
        if(onClosePanel){
            onClosePanel(false);
        }
    }

    return(
        <Drawer open={openPanel} onClose={closePanel}>
            <Grid container item xs={12} className={classes.detailSection}>
                <Grid item xs={10}>
                    <FavouritesButton item={characterDetail}/>
                </Grid>
                <Grid item xs={2}>
                    <DialogTitle disableTypography className={classes.drawerTitle}>
                        <IconButton onClick={closePanel}>
                            <CloseIcon />
                        </IconButton>
                    </DialogTitle>
                </Grid>
                <Grid item id="detail" xs={12} className={classes.paddingTop2}>
                    <CharacterDetail characterDetail={characterDetail}/>
                </Grid>
            </Grid>
      </Drawer>
    )
}

CharacterDetailLeftPanel.propTypes = {
    characterDetail: PropTypes.object,
    onClosePanel: PropTypes.func.isRequired,
    openPanel: PropTypes.bool
}

export default CharacterDetailLeftPanel;