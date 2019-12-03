import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import IconButton from '@material-ui/core/IconButton';

/**
 * This compoenet shows the Favourites button. 
 * These button are shown on the detail screen and on the card of chracter on main page
 * @param {*} props 
 */
const FavouritesButton = (props) => {
    const { addToFav, item, favourites, removeFromFav, addNotification, showIcon = 'BUTTONS' } = props;

    /**
     * This function adds favourites into the store
     */
    const clickOnAddtoFav = () => {
        addToFav(item);
        addNotification(item.name+' has been successfully added to favourites.','info');
    }

    /**
     * This function removes favourites from the store
     */
    const clickOnRemoveFromFav = () => {
        removeFromFav(item);
        addNotification(item.name+' has been successfully removed from favourites.','info');
    }

    /**
     * This function checks if the item is already present into favourites
     */
    const isAlreadyAddedToFav = favourites.filter(fav=>{
        if(item && item.id === fav.id){
            return true;
        }
    }).length > 0;

    /**
     * Click handler of favourite star icon on the card
     */
    const favIconClick = () =>{
        if(isAlreadyAddedToFav){
            clickOnRemoveFromFav();
        }else{
            clickOnAddtoFav();
        }
    }

    return (
       <React.Fragment>
           {showIcon === 'STAR' && (
               <IconButton onClick = {favIconClick}>
                   {isAlreadyAddedToFav ? 
                        <StarIcon/> :
                        <StarBorderIcon/>
                   }
               </IconButton>
           )}
           {showIcon === 'BUTTONS' && (
            <Grid container item xs={12} spacing={2} justify="center">
                <Grid item xs={4} align="right">
                    <Button
                        onClick={clickOnAddtoFav}
                        size="small"
                        variant="contained" color="primary"
                        disabled={isAlreadyAddedToFav}
                    >
                        Add to Favourites
                </Button>
                </Grid>
                <Grid item xs={5} align="left">
                    <Button
                        onClick={clickOnRemoveFromFav}
                        size="small"
                        variant="contained" color="primary"
                        disabled={!isAlreadyAddedToFav}
                    >
                        Remove from Favourites
                </Button>
                </Grid>
            </Grid>
           )}
        
        </React.Fragment>
    )
}

FavouritesButton.propTypes = {
    addToFav: PropTypes.func.isRequired, 
    item: PropTypes.object,
    favourites: PropTypes.arrayOf(PropTypes.instanceOf(Object)), 
    removeFromFav: PropTypes.func.isRequired, 
    showIcon: PropTypes.string,
    addNotification: PropTypes.func.isRequired, 
}

export default FavouritesButton;