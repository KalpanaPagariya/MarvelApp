import CharacterNotification from './CharacterNotification.component';
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { wrapper } from '../utilities/testUtility';
import { act } from 'react-dom/test-utils';
import Notification from '../ui-components/Notification';

jest.mock('../ui-components/Notification',() => jest.fn());

describe('Carousel test Suite',()=>{
    let props;

    afterEach(()=>cleanup());
 
    beforeAll(()=>{
        
        props = {
            notification: 'Something went wrong'
        }
    });


    it('render',()=>{
        act(() => {
        Notification.mockImplementation((props) => <React.Fragment>{props.msg}</React.Fragment>)
            const { getByText } =render (
                <CharacterNotification {...props}/>, {wrapper}
            );
            expect(getByText('Something went wrong')).not.toBeNull();
        });
    })

   
})