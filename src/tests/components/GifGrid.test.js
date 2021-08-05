import { GifGrid } from "../../components/GifGrid";
import { shallow } from "enzyme";
import React from "react";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en GifGrid', () => {
    const categories = 'Goten';
    test('Debe cargar correctamente', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        const wrapper = shallow(<GifGrid categories={categories}/>);
        expect(wrapper).toMatchSnapshot();
    })
    test('Debe mostrar items cuando se cargan imagenes useFetchsGifs', () => {
        //Mocks = simular informacion
        const imgs = [{id: 'ABC', url: 'https://www.test.com/cosa.jpg', title: 'test' }]
        useFetchGifs.mockReturnValue({
            data: imgs,
            loading: false
        });
        const wrapper = shallow(<GifGrid categories={categories}/>);
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(imgs.length);
    })


})
