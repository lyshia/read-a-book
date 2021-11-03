import React from 'react';
import { Card, Form } from 'react-bootstrap';
import '../styles/book.css'

const Book = (props) => {

	console.log(props.book);

	const book = props.book.map( (book) => {
		return (
			<Card className="book-card-body">
				<Card.Img
					className='book-card-image'
					variant='top'
					src={book.volumeInfo.imageLinks.smallThumbnail}
				/>
				<Card.Body>
					<Card.Title className='book-info'> {book.volumeInfo.title}</Card.Title>
					<Card.Subtitle className='book-info'> {book.volumeInfo.authors}</Card.Subtitle>
					<p> Status </p>
					<Form>
						{['radio'].map((type) => (
							<div key={`inline-${type}`} className='mb-3'>
								<Form.Check
									inline
									label='unread'
									name='read-status'
									type={type}
									id={`inline-${type}-unread`}
								/>
								<Form.Check
									inline
									label='currently reading'
									name='read-status'
									type={type}
									id={`inline-${type}-currently-reading`}
								/>
								<Form.Check
									inline
									label='read'
									name='read-status'
									type={type}
									id={`inline-${type}-read`}
								/>
							</div>
						))}
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
