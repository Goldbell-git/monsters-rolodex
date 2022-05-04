import React from "react";
import './search-field.css';

export const SearchField = ({ placeholder, handleChange }) => (
        <input className="search-field" 
        type='search' placeholder={ placeholder }
        onChange={ handleChange }
        />
)