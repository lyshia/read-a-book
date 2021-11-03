import React, {useState} from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import '../styles/book.css'

const Book = (props) => {

	const [ radioValue, setRadioValue] = useState();

	const onSelected = (event) => {
		setRadioValue(event.target.value);
	}

	console.log("radio value" , radioValue)

	let review = "";

	if (radioValue === 'read') {
		
	}	

	const book = props.book.map( (book) => {
		return (
			<Card className='book-card-body'>
				<Card.Img
					className='book-card-image'
					variant='top'
					src={book.volumeInfo.imageLinks.smallThumbnail}
				/>
				<Card.Body>
					<Card.Title className='book-info'>
						{' '}
						{book.volumeInfo.title}
					</Card.Title>
					<Card.Subtitle className='book-info'>
						{' '}
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
							<Form.Group
								className='mb-3'
								controlId='exampleForm.ControlTextarea1'>
								<Form.Label>Write a review</Form.Label>
								<Form.Control as='textarea' rows={3} />
								<Button
									style={{
										background: '#145368',
										color: '#FDE9C9',
										margin: '10px',
									}}
									type='submit'>
									Submit
								</Button>
							</Form.Group>
						</div>
					</Form>
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
