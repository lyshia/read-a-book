import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import SearchList from './SearchList';

const Search = (props) => {
	const [book, setBook] = useState([]);
    const [searchBook, setSearchBook] = useState([]);

	const makeApiCall = (book) => {
		console.log('api call book', { book });
		fetch(`https://www.googleapis.com/books/v1/volumes?q=${book}`)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				console.log(data);
				setSearchBook(data);
			});
	};

	const handleChange = (event) => {
		setBook(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		makeApiCall(book);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input onChange={handleChange} type='text' />
				<Button type='submit'>Search</Button>
			</form>

			<SearchList bookList={searchBook} />
		</div>
	);
};

export default Search;
