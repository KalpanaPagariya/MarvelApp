import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

import { styles } from './styles';
import { get } from 'lodash';

import SearchField from '../ui-components/SearchField'
import Carousel from '../ui-components/Carousel';
import CharacterCarouselCard from './CharacterCarouselCard.component';
import { filterCharacters } from '../utilities/utility';
import CharacterDetailLeftPanel from './details/CharacterDetailLeftPanel.component';
import { LIMIT_PER_CARD } from '../utilities/constants';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(styles);

/**
 * This compoenet is landing page of the application. 
 * It shows the character table along with pagination.
 * @param {*} props 
 */
const ViewCharacters = (props) => {
    const { characters = {}, fetchCharacters, favourites =[]} = props;
    const classes = useStyles();
    const result = get(characters,'data.data.results',[]);
    const [dataLoaded, setDataLoaded] = useState(false);
    const [filteredResult, setFilteredResult] = useState([]);
    const [openOverlay, setOpenOverlay] = useState(false);
    const [clickedItem, setClickedItem] = useState(null);
    const [resetCardIndex, setResetCardIndex] = useState('false');
    const [favRecordsVisible, setFavRecordsVisible] = useState(false);

    const fetchData = async() =>{
        await fetchCharacters();
        setDataLoaded(true);
    }

    /**
     * Fetches characters on the laod of the screen
     */
    useEffect(()=>{
        if(Object.entries(characters).length === 0 ){
            fetchData();
        }
    },[]);

    /**
     * Setting the all results in the fileredResult on load.
     */
    useEffect(()=>{
        setFilteredResult(result);
    },[result.length]);

    /**
     * This functions open or closes the overlay details of character
     * @param {*} state 
     */
    const openCloseOverlayDetail = (state) => {
        console.log('Clicked menu'+state)
        setOpenOverlay(state);
    }

    /**
     * This functions open or closes the overlay details of character
     * @param {*} state 
     */
    const onCarouselCardClick = (clickedItem) => {
        openCloseOverlayDetail(true);
        setClickedItem(clickedItem);
    }

    /**
     * Renders three characters at a time in table
     * @param {*} start 
     */
    const renderChildren = (start=0) =>{
          return(
              <CharacterCarouselCard 
                data={filteredResult.slice(start,start+LIMIT_PER_CARD)} 
                classes = {classes}
                onCarouselCardClick={onCarouselCardClick}
              />
          )
      }

      /**
       * This function is called when the user searches the character and selects one item. 
       * This item is stored in store
       * @param {*} selectedItem 
       */
    const onSelectCharacter = (selectedItem) => {
        console.log('onSelectCharacter');
        console.log(selectedItem);
        setFilteredResult( selectedItem? filterCharacters(result,selectedItem): result);
        setResetCardIndex(true);
    }

    /**
     * This shows the Favourites the records in the table. It sets the active index of the serch component to back 0 incase
     *  if this button is clicked on the midddle of pagination.
     */
    const clickOnViewFav = () =>{
        setFilteredResult(favourites);
        setResetCardIndex('true');
        setFavRecordsVisible(true);
    }

    /**
     * Removes the favourites character from table and show all.
     */
    const clickOnViewAll = () =>{
        setFilteredResult(result);
        setResetCardIndex('true');
        setFavRecordsVisible(false);
    }

    return(
    <div className={classes.root}>
        <Grid container spacing={3} justify="center">
          <Grid container item xs={12} align="center">
           
                <Grid item xs={6}>
                <SearchField 
                    suggestions={result} 
                    placeholder="Search Characters"
                    label="Marvel Characters"
                    labelKey = "name"
                    onSelectItem={onSelectCharacter}
                />
                </Grid>
                <Grid container item xs={4} spacing={2} className={classes.favButton} justify="center">
                    <Grid item xs={8} align="right">
                    <Button
                        id="viewFav"
                       variant="contained"
                        size="small"
                        color="primary"
                        onClick={clickOnViewFav}
                        disabled={favourites.length === 0}
                    >View Favourites</Button>
                    </Grid>
                    <Grid item xs={4} align="left">
                    <Button
                        id="viewAll"
                        variant="contained"
                        size="small"
                        color="primary"
                        onClick={clickOnViewAll}
                        disabled={!favRecordsVisible}
                    >View All</Button>
                    </Grid>
                </Grid>
          </Grid>
          <Grid item xs={12} align="center">
              {dataLoaded ? 
              <Carousel 
                renderChildren={renderChildren} 
                totalCount={filteredResult.length} 
                limitPerCard={LIMIT_PER_CARD}
                resetActiveIndex={resetCardIndex}
              />
              :
              <CircularProgress disableShrink />
            }
        </Grid>
        <CharacterDetailLeftPanel 
            openPanel={openOverlay} 
            onClosePanel={openCloseOverlayDetail}
            characterDetail = { clickedItem }
        />
        </Grid>
      </div>
  
    )
}

ViewCharacters.propTypes = {
    characters: PropTypes.shape({}),
    fetchCharacters: PropTypes.func.isRequired
}

export default ViewCharacters;