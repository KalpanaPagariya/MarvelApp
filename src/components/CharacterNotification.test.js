import CharacterNotification from './CharacterNotification.component';
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { wrapper } from '../utilities/testUtility';
import { act } from 'react-dom/test-utils';
import Notification from '../ui-components/Notification';

jest.mock('../ui-components/Notification',() => jest.fn());

describe('Character notification test Suite',()=>{
    let props;

    afterEach(()=>cleanup());
 
    beforeAll(()=>{
        
        props = {
            notification: {
                msg: 'Something went wrong',
                type: 'error'
            }
        }
    });


    it('render',()=>{
        act(() => {
        Notification.mockImplementation((props) => <React.Fragment>Something went wrong</React.Fragment>)
            const { getByText } =render (
                <CharacterNotification {...props}/>, {wrapper}
            );
            expect(getByText('Something went wrong')).not.toBeNull();
        });
    })

   
})