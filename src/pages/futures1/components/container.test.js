import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Container from "./container.jsx";

Enzyme.configure({ adapter: new Adapter() });

describe('Container',()=>{
    it('Should show the text',()=>{
        const containerInstance = shallow(<Container/>);
        const element  = containerInstance.find('div div p');
        expect(element.text).toBe('<<');
    })
});