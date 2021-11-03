import React from 'react';
import { Card } from 'react-bootstrap';
import './book.css'
import { Link } from 'react-router-dom';

const BookList = (props) => {
	
	console.log(props.book)

	let bookList = props.book.map((book) => {
		return (
			<Link to={'/Book/' + book.id}>
				<Card>
					<Card.Img
						className='card-image'
						variant='top'
						src={book.volumeInfo.imageLinks.smallThumbnail}
					/>
					<Card.Body>
						<Card.Title> Title: {book.volumeInfo.title}</Card.Title>
						<Card.Subtitle> Author: {book.volumeInfo.authors}</Card.Subtitle>
					</Card.Body>
				</Card>
			</Link>
		);
	});

	return (
		<div>
			<h1> My Book List </h1>
			{bookList}
		</div>
	);
};

export default BookList;
