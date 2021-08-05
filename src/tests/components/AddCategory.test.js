import { shallow } from "enzyme";
import React from "react";
import { AddCategory } from "../../components/AddCategory";

describe('Pruebas en AddCategory', () => {
    const setCategories = jest.fn(); //Simula función y ver un log de las llamadas
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    let input = wrapper.find('input');

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);
        input = wrapper.find('input');
    });
    test('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    test('Debe cambiar la caja de texto', () => {
        const value = 'Hola mundo';
        input.simulate('change', { target: {value} });
        expect(wrapper.find('p').text().trim()).toBe( value );
    });
    test('No debe hacer el post de la información en un submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect(setCategories).not.toHaveBeenCalled();
    })
    test('Debe llamar el setCategories y limpiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        input.simulate('change', { target: { value }});
        const form = wrapper.find('form');
        form.simulate('submit', { preventDefault(){} });
    })




})
