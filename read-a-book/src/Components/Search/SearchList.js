import React from 'react';
import { Card } from 'react-bootstrap';
import '../styles/cards.css';
import addButton from './img/add.png';

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
					<Card.Title> {book.volumeInfo.title}</Card.Title>
					<Card.Subtitle>{book.volumeInfo.authors}</Card.Subtitle>
					<img
						class='add-button'
						src={addButton}
						alt='add to book list'
						onClick={() => props.addSearchBookToBookList(book)}
					/>
				</Card.Body>
			</Card>
		);
	});
	return <div className='show-cards'> {books} </div>;
};

export default SearchList;
