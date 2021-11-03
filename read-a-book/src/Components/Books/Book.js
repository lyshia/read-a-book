import React from 'react';
import { Card } from 'react-bootstrap';

const Book = (props) => {

	console.log(props.book);

	const book = props.book.map( (book) => {
		return (
			<Card>
				<Card.Img className='card-image-book' variant='top' src={book.volumeInfo.imageLinks.smallThumbnail} />
				<Card.Body>
					<Card.Title> {book.volumeInfo.title}</Card.Title>
					<Card.Subtitle> {book.volumeInfo.authors}</Card.Subtitle>
					<p> Status </p>
				</Card.Body>
			</Card>
		);
	})

	return (
		<div>
			<h1>Books</h1>
				{book}
		</div>
	);
}

export default Book;
