import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

import { get } from 'lodash';

import DataSection from '../../ui-components/DataSection';
import { DASH_STRING, SECTION_NAMES } from '../../utilities/constants';

/**
 * This component shows the details of the marvel character
 */
const CharacterDetail = (props) =>{
    const { characterDetail } = props;

    /**
     * This function is used to render section which have multiple values
     */
    const renderArrayTable = (data,name) =>{
        const items = get (data, 'items',[]);
        return(
            <Grid container item xs={12}>
                {items.map((rec,index)=>{
                    return(
                        <Grid xs={6} item key={'name'+index}>
                            <Typography variant="body1">{rec.name}</Typography>
                        </Grid>
                    )
                })}
                {items.length === 0 && 
                    <Typography variant="body1">{DASH_STRING}</Typography>
                }
            </Grid>
        )
    }

    return(
        <Grid item>
            <DataSection label="Description">
                <Typography variant="body1">{characterDetail.description ? characterDetail.description: DASH_STRING}</Typography>
            </DataSection>
            <DataSection label="Comics">
                {renderArrayTable(characterDetail.comics,SECTION_NAMES.COMICS)}
            </DataSection>
            <DataSection label="Series">
                {renderArrayTable(characterDetail.series,SECTION_NAMES.SERIES)}
            </DataSection>
            <DataSection label="Stories">
                {renderArrayTable(characterDetail.stories,SECTION_NAMES.STORIES)}
            </DataSection>
       </Grid>
    )
}


CharacterDetail.propTypes = {
    characterDetail: PropTypes.object,
}

export default CharacterDetail;