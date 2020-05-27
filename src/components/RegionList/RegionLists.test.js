import React from 'react'
import RegionList from "./RegionList"
import {shallow} from "enzyme"




describe('Region Component', () => {
    it('should find', () => {
        const component = shallow(<RegionList />)
        const wrapper = component.find("custom-select m-3 w-30")
        expect(wrapper.length).toBe(1);
    });
});
