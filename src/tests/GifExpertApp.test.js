import {shallow} from 'enzyme';
import React from "react";
import GifExpertApp from '../GifExpertApp'


describe('Pruebas en GifExpertApp', () => {
    test('Debe matchear el snapshot', () => {
        const wrapper = shallow( <GifExpertApp /> )
        expect(wrapper).toMatchSnapshot();
    });
    test('Debe mostrar una lista de categorias', () => {
        const categories = [ 'One Punch', 'Dragon Ball' ];
        const wrapper = shallow( <GifExpertApp defaultCategories = {categories} /> );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    });


})
