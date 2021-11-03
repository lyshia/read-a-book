import React  from 'react';
import BookList from './Books/BookList';
import Search from './Search/Search';


const Home = (props) => {

	return (
		<div>
			<h1> Hello!</h1>
			<p> Lets read some books</p>
			<p> Search for a book to add to your read list!</p>
	
			<Search addSearchBookToBookList={props.addSearchBookToBookList} />

			<BookList book={props.book} />
		</div>
	);
};

export default Home;
