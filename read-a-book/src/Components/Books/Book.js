import React, { useState, useEffect } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import '../styles/book.css';

const Book = (props) => {
	const [radioValue, setRadioValue] = useState();
	const [book, setBook] = useState();
	const [isActive, setActive] = useState(false);

	let currentBook = props.match.params.id;
	console.log("currentbook", currentBook)
	const makeApiCall = (api) => {
		fetch(api)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setBook(data.items[0]);
			});
	};

	useEffect(() => {
		const api = `https://www.googleapis.com/books/v1/volumes?q=id:${currentBook}`;
		makeApiCall(api);
	}, [currentBook]);

	let showText = '';

	const onSelected = (event) => {
		setRadioValue(event.target.value);
		if (event.target.value === 'read') {
			console.log('AHHHHHHHH!!!');
			setActive(true)
			// showText = (
				// <Form.Group className='mb-3 review-text' controlId='writeReview'>
				// 	<Form.Label>Write a review</Form.Label>
				// 	<Form.Control as='textarea' rows={3} />
				// 	<Button
				// 		style={{
				// 			background: '#145368',
				// 			color: '#FDE9C9',
				// 			margin: '10px',
				// 		}}
				// 		type='submit'>
				// 		Submit Review
				// 	</Button>
				// </Form.Group>
			// );
			showText = 'hello!';
		} else {
			setActive(false)
		}
	};

	console.log('radio value', radioValue);

	let bookDetail = '';

	if (book) {
		bookDetail = (
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
					<p> Status </p>
					<Form>
						<div key={'inline-radio'} className='mb-3'>
							<Form.Check
								inline
								label='unread'
								name='read-status'
								type='radio'
								id={'unread-radio'}
								value='unread'
								onChange={onSelected}
							/>
							<Form.Check
								inline
								label='currently reading'
								name='read-status'
								type='radio'
								id={'currently-reading-radio'}
								value='currently-reading'
								onChange={onSelected}
							/>
							<Form.Check
								inline
								label='read'
								name='read-status'
								type='radio'
								id={'read-radio'}
								value='read'
								onChange={onSelected}
							/>
							<Form.Group className={ isActive ?'mb-3 review-text' :null}
								
								controlId='writeReview'>
								<Form.Label>Write a review</Form.Label>
								<Form.Control as='textarea' rows={3} />
								<Button
									style={{
										background: '#145368',
										color: '#FDE9C9',
										margin: '10px',
									}}
									type='submit'>
									Submit Review
								</Button>
							</Form.Group>
							<Card.Text>{showText}</Card.Text>
						</div>
					</Form>
				</Card.Body>
			</Card>
		);
	}

	return (
		<div>
			<h1>Books</h1>
			{bookDetail}
		</div>
	);
};

export default Book;
