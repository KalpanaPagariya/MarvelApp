import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import FavouritesButton from '../containers/FavouritesButton.container';
import Link from '@material-ui/core/Link';

/**
 * This component represents the the card table.
 */
class CharacterCarouselCard extends React.Component {

    /**
     * This function is called on click of marvel character to open overlay of details
     */
    onClick = (record) =>{
        const { onCarouselCardClick } = this.props;
        console.log(record);
        if(onCarouselCardClick){
            onCarouselCardClick(record);
        }
    }

    /**
     * This is creating cards based on how many can be shown on the screen
     */
    createCard = (record) => {
        const { classes } = this.props;
        return (
            <Grid item xs={4}
                align="center"
                key={record.id}
               
            >
                <Grid className={classes.carouselItem}>
                    <Grid item xs={12} className={classes.cursorPointer} onClick={() => this.onClick(record)}>
                       <img src= {record.thumbnail.path} alt='Not Found'/>
                    </Grid>
                    <Grid item xs={10}>
                        <Typography variant="body1">
                        <Link id={record.name} href="#" onClick={() => this.onClick(record)}>
                            {record.name}
                        </Link>
                        <FavouritesButton item={record} showIcon = 'STAR'/>
                        </Typography>
                        
                    </Grid>
                    
                </Grid>
            </Grid>
        )
    };

    render() {
        const { data, classes } = this.props;
        return (
            <Grid container spacing={3} justify="center" className={classes.carouselItemWrapper}>
                {data.map(record => (
                    this.createCard(record)
                ))}
            </Grid>
        )
    }
}

CharacterCarouselCard.propTypes = {
    classes: PropTypes.object.isRequired,
    data: PropTypes.arrayOf(PropTypes.instanceOf(Object)),
    onCarouselCardClick: PropTypes.func.isRequired
}

export default CharacterCarouselCard;