import CharacterCarouselCard from './CharacterCarouselCard.component';
import React from 'react';
import { mockData, wrapper } from '../utilities/testUtility';
import { act } from 'react-dom/test-utils';
import FavouritesButton from '../containers/FavouritesButton.container';
import Button from "@material-ui/core/Button";
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from '../styles/theme';
import { shallow } from 'enzyme';

jest.mock('../containers/FavouritesButton.container',() => jest.fn());

describe('Character Carousel Card test Suite',()=>{
    let props;
 
    beforeAll(()=>{
        
        props = {
            data: mockData().data.results,
            onCarouselCardClick: jest.fn(),
            classes: {}
        }
    });


    it('render',()=>{
    
        const compo = shallow(
            <MuiThemeProvider theme={theme}>
                <CharacterCarouselCard {...props}/>
            </MuiThemeProvider>
        )
        compo.update();
        expect(compo).toBeDefined();
    })

})