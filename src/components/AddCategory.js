import { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
    const [inputValue, setinputValue] = useState('');
    const handleChangeValue = ( e ) =>{
        setinputValue(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 2){
            setCategories(cats => [inputValue, ...cats]);
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <p>{inputValue}</p>
            <input type="text" value={inputValue} onChange={handleChangeValue}/>
        </form>
    )
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}