import CharacterDetail from './CharacterDetail.component';
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { mockData, wrapper } from '../../utilities/testUtility';
import { act } from 'react-dom/test-utils';

describe('Character detils test Suite',()=>{
    let props;

    afterEach(()=>cleanup());
 
    beforeAll(()=>{
        
        props = {
            characterDetail: mockData().data.results[0]
        }
    });


    it('render',()=>{
        act(() => {
       
            const { container } =render (
                <CharacterDetail {...props}/>, {wrapper}
            );
            expect(container).toBeDefined();
        });
    })

   
})