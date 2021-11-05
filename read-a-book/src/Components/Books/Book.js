import React, { useState, useEffect } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import ReviewList from '../Reviews/ReviewList';
import '../styles/book.css';

const Book = (props) => {
	const [radioValue, setRadioValue] = useState();
	const [active, setActive] = useState(false);
	const [book, setBook] = useState();
	const [review, setReview] = useState();

	//get the current book and call api again to show the information.
	let currentBook = props.match.params.id;
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

	//for the radio buttons
	const onSelected = (event) => {
		setRadioValue(event.target.value);
		if (event.target.value === 'read') {
			setActive(true);
		}
		else {
			setActive(false);
		}
	};

	//review
	const handleChange = (event) => {
		setReview(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		props.addReviewtoReviewList(review, book);
	};

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
							<Form.Group className={active ? 'mb-3 review-text-visible' : 'mb-3 review-text-invisible'} controlId='writeReview'>
								<Form.Label>Write a review</Form.Label>
								<Form.Control as='textarea' rows={3} onChange={handleChange} />
								<Button
									style={{
										background: '#145368',
										color: '#FDE9C9',
										margin: '10px',
									}}
									type='submit'
									onClick={handleSubmit}>
									Submit Review
								</Button>
							</Form.Group>
						
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
