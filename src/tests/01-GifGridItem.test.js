import React from 'react';
import { shallow } from 'enzyme';
import {GifGridItem}  from '../components/GifGridItem';
describe('Componente pruebas', () => {
    const title = 'Un titulo';
    const url = 'https://localhost.com/test.jpg';
    const wrapper = shallow(<GifGridItem title = {title} url = {url}/>);
    test('Debe mostrar el componente', () => {
        expect(wrapper).toMatchSnapshot();
    })
    test('Debe tener un párrafo con el title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    })
    test('Debe tener la imagen con un src y un alt', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    })
    test('debe tener animate__fadeIn', () => {
        const div = wrapper.find('div');
        // expect(div.prop('className')).toContain('animate__slow')
        expect(div.prop('className').includes('animate__slow')).toBe(true)
        // expect(div.prop('className').includes('animate__slow')).not.toBe(true)
    })


});

