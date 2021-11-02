import React from 'react';
import { Card } from 'react-bootstrap';
import './search.css';
import add from './img/add.png';

const SearchList = (props) => {
	const books = props.bookList.map((book, i) => {
		return (
			<Card className='card' key={i}>
				<Card.Img
					className='card-image'
					variant='top'
					src={book.volumeInfo.imageLinks.thumbnail}
					alt={book.volumeInfo.title}
				/>
				<Card.Body>
					<h4> Title: {book.volumeInfo.title}</h4>
					<h4> Author: {book.volumeInfo.authors}</h4>
					<img
						src={add}
						alt='add to book list'
						onClick={() => props.addSearchBookToBookList(books)}
					/>
				</Card.Body>
			</Card>
		);
	});
	return <div className='showCards'> {books} </div>;
};

export default SearchList;
