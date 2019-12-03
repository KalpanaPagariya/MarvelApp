import ViewCharacters from './ViewCharacters.component';
import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { mockData, wrapper } from '../utilities/testUtility';
import { act } from 'react-dom/test-utils';


describe('Carousel test Suite',()=>{
    let props;

    afterEach(()=>cleanup());
 
    beforeAll(()=>{
        
        props = {
            characters: mockData(),
            fetchCharacters: jest.fn()

        }
    });


    it('render',()=>{
        act(() => {
            const { container } =render (
                <ViewCharacters {...props}/>, {wrapper}
            );
            expect(container).toBeDefined();
        });
    })

    it('check carousel',()=>{
            act(() => {
            const { container, getByText  } =render (
                <ViewCharacters {...props}/>, {wrapper}
            );
            expect(container.querySelector("#carouselCard")).toBeDefined();
            expect(getByText('Marvel Characters')).not.toBeNull();
        })
    })

    it('check View favourites and all',()=>{
        act(() => {
            const { container, getByText  } =render (
                <ViewCharacters {...props}/>, {wrapper}
            );
            expect(getByText('View Favourites')).not.toBeNull();
            expect(getByText('View All')).not.toBeNull();
        })
    })

    it('View Fav click',()=>{
        act(()=>{
        const { container } =render (
            <ViewCharacters {...props}/>, {wrapper}
        );
        
            fireEvent.click(container.querySelector('#viewFav'));
            
        })
    })

    it('View All click',()=>{
        const { container } =render (
            <ViewCharacters {...props}/>, {wrapper}
        );
        act(()=>{
            fireEvent.click(container.querySelector('#viewAll'));
            
        })
    })
  
    it('fav visible carousel',()=>{
        const { container } =render (
            <ViewCharacters {...props}/>, {wrapper}
        );
    
        expect(container.querySelectorAll("button").length).toBe(2);
    })

})