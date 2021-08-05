import {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
export const GifExpertApp = ( {defaultCategories= []} ) => {
    // const [categories, setCategories] = useState(['Dragon Ball Z']);
    const [categories, setCategories] = useState(defaultCategories);

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