import React from 'react';

const SearchList = (props) => {
    console.log("on the search list page")
    console.log(props)

    
	const books = props.bookList.map((book, i) => {
		return (
			<div key={i}>
				<img
					src={book.items.volumeInfo.imageLinks.thumbnail}
					alt={book.items.volumeInfo.title}
				/>
				<h4> Title: {book.items.volumeInfo.title}</h4>
				<h4> Author: {book.items.volumeInfo.authors}</h4>
				<h4> Description: {book.items.volumeInfo.description}</h4>
			</div>
		);
	});
	return <div> {books} </div>;
 
};


export default SearchList;
