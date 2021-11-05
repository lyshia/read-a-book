import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';

const Random = (props) => {
	const [randomBook, setRandomBook] = useState([]);
	console.log(props.book);

	const makeApiCall = async () => {
		const random = Math.floor(Math.random() * props.book.length);

		const newBook =
			props.book[random].volumeInfo.industryIdentifiers[0].identifier;

		let bookUrl = `https://www.googleapis.com/books/v1/volumes?q=isbn:${newBook}`;

		const res = await fetch(bookUrl);
		const json = await res.json();

		setRandomBook(json.items[0].volumeInfo);
	};

	let nextRead = '';

	console.log('random books', randomBook.imageLinks);
	if (randomBook.imageLinks) {
		nextRead = (
			<Card className='book-card-body'>
				<Card.Img
					className='book-card-image'
					variant='top'
					src={randomBook.imageLinks.smallThumbnail}
				/>
				<Card.Body>
					<Card.Title className='book-info'>{randomBook.title}</Card.Title>
					<Card.Subtitle className='book-info'>
						{randomBook.authors}
					</Card.Subtitle>
				</Card.Body>
			</Card>
		);
	}

	const handleClick = (e) => {
		e.preventDefault();
		makeApiCall();
		// setRead();
	};

	return (
		<div>
			<h1> your next read</h1>
			<Button
				style={{
					background: '#145368',
					color: '#FDE9C9',
					margin: '10px',
				}}
				onClick={handleClick}>
				What will it be?
			</Button>
			<div> {nextRead} </div>
		</div>
	);
};

export default Random;
