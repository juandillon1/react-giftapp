import {shallow} from 'enzyme';
import {useFetchGifs} from '../../hooks/useFetchGifs'
import {renderHook} from '@testing-library/react-hooks';

describe('Pruebas sobre useFetchGifs', () => {
    test('debe retornar estado inicial ', async() => {
        // const {data, loading} = useFetchGifs('Goku');
        const {result, waitForNextUpdate} = renderHook( () =>  useFetchGifs('Goku'));
        const {data, loading} = result.current;

        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });
    test('Debe retornar arreglo de imagenes y loading en false', async() => {
        const {result, waitForNextUpdate} = renderHook( () =>  useFetchGifs('Goku'));
        await waitForNextUpdate();
        const {data, loading} = result.current;
        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    })


})
