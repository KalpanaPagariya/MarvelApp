import SearchField from './SearchField.component';
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { wrapper } from '../../utilities/testUtility';
import { act } from 'react-dom/test-utils';


describe('Search Field test Suite',()=>{
    let props;

    afterEach(()=>cleanup());
 
    beforeAll(()=>{
        
        props = {
            suggestions: [{name: 'ABC'},{name: 'I MAN'}],
            label: 'Marvel',
            labelKey: 'name',
            onSelectItem: jest.fn()
        }
    });


    it('render',()=>{
        act(() => {
      
            const { container } =render (
                <SearchField {...props}/>, {wrapper}
            );
            expect(container).toBeDefined();
        });
    })

   
})