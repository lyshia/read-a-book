import React, { useState } from 'react';
import BookList from './Books/BookList';
import Search from './Search/Search';
import Routes from './Routes';

const Home = (props) => {
	const [bookList, setBookList] = useState([]);

	const addSearchBookToBookList = (book) => {
		setBookList([...bookList, book]);
	};

	return (
		<div>
			<h1> Hello!</h1>
			<p> Lets read some books</p>
			<p> Search for a book to add to your read list!</p>
	

			<Search addSearchBookToBookList={addSearchBookToBookList} />

			<BookList book={bookList} />
		</div>
	);
};

export default Home;
