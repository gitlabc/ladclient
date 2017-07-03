import React from 'react';
import renderer from 'react-test-renderer';
import PasswordInput from './PasswordInput';
import {shallow} from 'enzyme';

describe('PasswordInput', () => {
    
    test('should toggles input type when show/hide password clicked', () => {
        const wrapper = shallow(<PasswordInput 
            htmlId='test'
            name='test'
            onChange={() => { }}
            showVisibilityToggle
            value=''
        />);

        //Password input should have a type of password intially
        expect(wrapper.find({type: 'password'})).toHaveLength(1);
        expect(wrapper.find({type: 'text'})).toHaveLength(0);

        //Password input should have a type of text after clicking toggle
        wrapper.find('a').simulate('click');
        expect(wrapper.find({ type: 'password' })).toHaveLength(0);
        expect(wrapper.find({ type: 'text' })).toHaveLength(1); 
    });
    

    test('should hides password quality by default', () => {
        const tree = renderer.create(
            <PasswordInput
                htmlId='test'
                name='test'
                onChange={() => { }}
                value='Uisi38#8iad'
            />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    test('should shows password quality when enabled and a password is entered', () => {
        const tree = renderer.create(
            <PasswordInput
                htmlId='test'
                name='test'
                onChange={() => { }}
                showQuality
                value='Uisi38#8iad'
            />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
    
    test('should hides password quality when enabled no password is entered', () => {
        const tree = renderer.create(
            <PasswordInput
                htmlId='test'
                name='test'
                onChange={() => { }}
                showQuality
                value=''
            />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

});
