import React from 'react';
import { Card } from 'react-bootstrap';

const Book = (props) => {

	console.log(props);

	const book = props.match.params;

	return (
		<div>
			<h1>Books</h1>
			<Card>
				<Card.Img className='card-image' variant='top' src={props} />
				<Card.Body>
					<h4> Title: {book.id}</h4>
					<h4> Author: {}</h4>
					<p> Finished? </p>
				</Card.Body>
			</Card>
		</div>
	);
}

export default Book;
