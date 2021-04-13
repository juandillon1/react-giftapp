import {useState} from 'react'
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';
const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Dragon Ball Z']);

    // const handleAdd = () => {
    //     setCategories([...categories, 'Naruto']);
    // };
    return (
        <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories}/>
        <hr />

        <ol>
            {
                categories.map( categoria =>
                    <GifGrid categories={categoria} key={categoria}/>
                )
            }
        </ol>
        </>
    );
};

export default GifExpertApp;