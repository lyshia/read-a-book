import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';

const Random = (props) => {
	const [book, setBook] = useState();
	
	const random = Math.floor(Math.random() * props.book.length );

	let newBook = props.book[random].id;

	const makeApiCall = (api) => {
		fetch(api)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				console.log('Data', data.items[0]);
				setBook(data.items[0]);
			});
	};

	useEffect(() => {
		const api = `https://www.googleapis.com/books/v1/volumes?q=id:${newBook}`;
		makeApiCall(api);
	}, [newBook]);

	// // let nextRead  /*= '';*/
	// // if (props.book.length > 1) {
	// // 	makeApiCall();
	// //     console.log("book", book)

	// console.log('book info', book);
	let nextRead = (
		<Card className='book-card-body'>
			<Card.Img
				className='book-card-image'
				variant='top'
				src={book.volumeInfo.imageLinks.smallThumbnail}
			/>
			<Card.Body>
				<Card.Title className='book-info'>{book.volumeInfo.title}</Card.Title>
				<Card.Subtitle className='book-info'>
					{book.volumeInfo.authors}
				</Card.Subtitle>
			</Card.Body>
		</Card>
	);

	return (
		<div>
			<h1> your next read</h1>
			{/* <button onClick={makeApiCall}>What will it be?</button> */ }
			{nextRead}
		</div>
	);
};

export default Random;
