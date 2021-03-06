import React from 'react';
import { Card } from 'react-bootstrap';
import '../styles/cards.css';
import { Link } from 'react-router-dom';

const BookList = (props) => {

	let bookList = props.book.map((book, i) => {
		return (
			<Link to={'/Book/' + book.volumeInfo.industryIdentifiers[0].identifier } key={i}>
				<Card className='card'>
					<Card.Img
						className='card-image'
						variant='top'
						src={book.volumeInfo.imageLinks.smallThumbnail}
						key={i}
					/>
					<Card.Body>
						<Card.Title> {book.volumeInfo.title}</Card.Title>
						<Card.Subtitle> {book.volumeInfo.authors}</Card.Subtitle>
					</Card.Body>
				</Card>
			</Link>
		);
	});

	return (
		<div>
			<h1> My Book List </h1>
			<div className='show-books'>{bookList}</div>
		</div>
	);
};

export default BookList;
