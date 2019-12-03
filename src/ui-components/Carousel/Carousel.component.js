import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import Slide from "@material-ui/core/Slide";
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import { styles } from './Carousel.styles';
import { makeStyles } from '@material-ui/core/styles';

const transitionDuration = 1000;
const useStyles = makeStyles(styles);

/**
 * Common component to be used for Carousel along with prev and next button.
 * @param {*} props 
 */
const Carousel = (props) => {
    const [state, setState] = useState({ activeIndex: 0, elementIn: true });
    const { renderChildren, totalCount, limitPerCard, resetActiveIndex = 'false'} = props;
    const classes = useStyles();

    /**
     * This effects is executed when in the pagination of carousel, 
     * user wants to switch back to he first page.
     */
    useEffect(()=>{
        if(resetActiveIndex == 'true'){
            setState({
                activeIndex: 0,
                elementIn: true
            });
        }
    },[resetActiveIndex]);

    /**
     * On click of next, the active index is incremented by limitPerDay for next pagination start
     */
    const showNext = () => {
        const newActiveIndex = state.activeIndex + limitPerCard;
        if (newActiveIndex < (totalCount - 1)) {
            setState({
                activeIndex: newActiveIndex,
                elementIn: true
            });
        }
    };

    /**
     * On click of Prev, the active index is decremented by limitPerDay for prev pagination start
     */
    const showPrev = () => {
        if (state.activeIndex >= 0) {
            setState({
                activeIndex: (state.activeIndex - limitPerCard),
                elementIn: true
            });
        }
    };

    return (
        <div id="carouselCard">
            <Grid item xs={12} align="center">
                <Slide
                    in={state.elementIn}
                    timeout={transitionDuration}
                    direction="right"

                >
                    {renderChildren(state.activeIndex)}
                </Slide>
            </Grid>
            <Grid container item xs={12} spacing={2} justify="center" align="center" className = {classes.paddingTop}>
                <Grid item xs={2} align="right" >
                <Button 
                    onClick={showPrev} 
                    disabled={state.activeIndex === 0}
                    variant="contained" color="primary"
                    id="prevButton"
                >
                    Prev
                </Button>
                </Grid>
                <Grid item xs={2} align="left">
                <Button 
                    id="nextButton"
                    onClick={showNext} 
                    disabled={(state.activeIndex + limitPerCard) >= (totalCount - 1)}
                    variant="contained" 
                    color="primary"
                    className = {classes.button}
                >Next</Button>
                </Grid>
            </Grid>
        </div>
    );
}

Carousel.defaultProps={
    limitPerCard: 3
}

Carousel.propTypes = {
    renderChildren: PropTypes.func.isRequired,
    totalCount: PropTypes.number.isRequired,
    limitPerCard: PropTypes.number.isRequired,
    resetActiveIndex: PropTypes.string
}

export default Carousel;
