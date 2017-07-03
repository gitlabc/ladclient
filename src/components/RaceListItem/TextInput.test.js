import React from 'react';
import renderer from 'react-test-renderer';
import TextInput from './TextInput';
import {shallow} from 'enzyme';

describe('TextInput', () => {
    
    test('should toggles erro type when show/hide password clicked', () => {
        const wrapper1 = shallow(<TextInput 
            htmlId="example-optional"
            label="First Name"
            name="firstname"
            onChange={() => { }}
            required
        />);

        expect(wrapper1.find('div')).toHaveLength(1);
        
        const wrapper2 = shallow(<TextInput 
            htmlId="example-optional"
            label="First Name"
            name="firstname"
            onChange={() => { }}
            required
            error="First name is required."            
        />);

        expect(wrapper2.find('div')).toHaveLength(2);
    });
    

    test('should hides error by default', () => {
        const tree = renderer.create(
            <TextInput
                htmlId="example-optional"
                label="First Name"
                name="firstname"
                onChange={() => { }}
                required
            />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    test('should shows error when error is set', () => {
        const tree = renderer.create(
            <TextInput
                htmlId="example-optional"
                label="First Name"
                name="firstname"
                onChange={() => { }}
                required
                error="First name is required."
            />
        ).toJSON(); 

        expect(tree).toMatchSnapshot();
    });
    
});
