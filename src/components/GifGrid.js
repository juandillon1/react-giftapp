import { useFetchGifs } from "../hooks/useFetchGifs";
import { PropTypes } from 'prop-types';
import { GifGridItem } from './GifGridItem';
export const GifGrid = ({categories}) => {
    const {data: images, loading} = useFetchGifs(categories);

    return (
        <>
            <h3 className="animate__animated animate__bounce animate__slow"> {categories} </h3>
            {loading && <p className="animate__animated animate__flash">Cargando...</p> }
            <div className="card-grid">
            {
                images.map(img =>
                    <GifGridItem key={img.id} {...img}/>
                )
            }
            </div>
        </>
    )
};

GifGrid.propTypes = {
    categories: PropTypes.string.isRequired,
}