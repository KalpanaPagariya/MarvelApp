import FavouritesButton from './FavouritesButton.component';
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { mockData, wrapper } from '../../utilities/testUtility';
import { act } from 'react-dom/test-utils';

describe('Fav Buttons test Suite',()=>{
    let props;

    afterEach(()=>cleanup());
 
    beforeAll(()=>{
        
        props = {
            addToFav: jest.fn(), 
            item: mockData().data.results[0],
            favourites: mockData().data.results, 
            removeFromFav: jest.fn(), 
            showIcon: 'BUTTONS',
            addNotification: jest.fn(),
        }
    });


    it('render',()=>{
        act(() => {
       
            const { container } =render (
                <FavouritesButton {...props}/>, {wrapper}
            );
            expect(container).toBeDefined();
        });
    })

   
})