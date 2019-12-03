import Carousel from './Carousel.component';
import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { wrapper } from '../../utilities/testUtility';

describe('Carousel test Suite',()=>{
    let props;

    afterEach(()=>cleanup());

    beforeAll(()=>{
        props = {
            renderChildren: jest.fn(start=>{
                return(
                    <div>start</div>
                )
            }),
            totalCount: 5,
            limitPerCard: 3,

        }
       
    });

     it('render',()=>{
        const { container }  = render (
            <Carousel {...props}/>, {wrapper}
        );
        expect(container).toBeDefined();
    })

    it('Prev button disable on load',()=>{
        const { container }  = render (
            <Carousel {...props}/>, {wrapper}
        );
        console.log(container.querySelector('#prevButton').disabled);
        expect(container.querySelector('#prevButton').disabled).toBeTruthy();
    })

    

    it('Prev button enable on next',()=>{
        const { container }  = render (
            <Carousel {...props}/>, {wrapper}
        );
        act(()=>{
            fireEvent.click(container.querySelector('#nextButton'));
        })
        console.log(container.querySelector('#prevButton').disabled);
        expect(container.querySelector('#prevButton').disabled).toBeFalsy();
    })

    it('Next button enable on load',()=>{
        const { container }  = render (
            <Carousel {...props}/>, {wrapper}
        );
        console.log(container.querySelector('#nextButton').disabled);
        expect(container.querySelector('#nextButton').disabled).toBeFalsy();
    })

    it('Next button disable on last page',()=>{
        const { container }  = render (
            <Carousel {...props}/>, {wrapper}
        );
        console.log(container.querySelector('#nextButton').disabled);
        act(()=>{
            fireEvent.click(container.querySelector('#nextButton'));
        })
        console.log(container.querySelector('#nextButton').disabled);
        expect(container.querySelector('#nextButton').disabled).toBeTruthy();
    })

    it('Prev button clicked',()=>{
        const { container }  = render (
            <Carousel {...props}/>, {wrapper}
        );
       
        act(()=>{
            fireEvent.click(container.querySelector('#prevButton'));
            expect(props.renderChildren).toBeCalledWith(0);
        })
        
    })

    it('Next button clicked',()=>{
        const { container }  = render (
            <Carousel {...props}/>, {wrapper}
        );
        fireEvent.click(container.querySelector('#nextButton'));
        expect(props.renderChildren).toBeCalledWith(0);
    })
})