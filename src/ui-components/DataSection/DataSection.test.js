import DataSection from './DataSection.component';
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { wrapper } from '../../utilities/testUtility';

describe('DataSection test Suite',()=>{
    let props;

    afterEach(()=>cleanup());
    
    it('render',()=>{
        props = {
            label: 'Description',
        }
        const { container }  = render (
            (<DataSection {...props}>
                <div>Marvel character description</div>
            </DataSection>), {wrapper}
        );
        expect(container).toBeDefined();
    })
})