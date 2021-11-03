import React from 'react';
import { Card } from 'react-bootstrap';
import './search.css';
import addButton from './img/add.png';

const SearchList = (props) => {
	const books = props.bookList.map((book, i) => {
		return (
			<Card className='card' key={i}>
				<Card.Img
					className='card-image'
					variant='top'
					src={book.volumeInfo.imageLinks.smallThumbnail}
					alt={book.volumeInfo.title}
				/>
				<Card.Body>
					<Card.Title> Title: {book.volumeInfo.title}</Card.Title>
					<Card.Subtitle> Author: {book.volumeInfo.authors}</Card.Subtitle>
					<img
						src={addButton}
						alt='add to book list'
						onClick={() => props.addSearchBookToBookList(book)}
					/>
				</Card.Body>
			</Card>
		);
	});
	return <div className='showCards'> {books} </div>;
};

export default SearchList;
