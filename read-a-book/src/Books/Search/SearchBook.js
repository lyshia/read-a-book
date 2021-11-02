import React from "react";

const SearchBook = (props) => {

    return (
        <div>
            <img src={props.img} alt={props.title} />
            <h4> Title: {props.title}</h4>
            <h4> Author: {props.title}</h4>
            <h4> Description: {props.description}</h4>
            
        </div>
    )
}

export default SearchBook;