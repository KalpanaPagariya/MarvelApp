import Notification from './Notification.component';
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { wrapper } from '../../utilities/testUtility';
import { act } from 'react-dom/test-utils';

describe('Notification test Suite',()=>{
    let props;

    afterEach(()=>cleanup());
 
    beforeAll(()=>{
        
        props = {
            msg: 'Something went wrong',
            handleClose: jest.fn(),
            variant: 'error'
        }
    });


    it('render',()=>{
        act(() => {
       
            const { container } =render (
                <Notification {...props}/>, {wrapper}
            );
            expect(container).toBeDefined();
        });
    })

   
})