import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import SearchList from './SearchList';

const Search = (props) => {
	const [book, setBook] = useState([]);
	const [searchBook, setSearchBook] = useState([]);

	const makeApiCall = (book) => {
		fetch(`https://www.googleapis.com/books/v1/volumes?q=${book}`)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setSearchBook(data.items);
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
				<Button
					style={{ background: '#145368', color: '#FDE9C9', margin:'10px'}}
					type='submit'>
					Search
				</Button>
			</form>

			<SearchList
				addSearchBookToBookList={props.addSearchBookToBookList}
				bookList={searchBook}
			/>
		</div>
	);
};

export default Search;
