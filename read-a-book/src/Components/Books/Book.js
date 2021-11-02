import React from 'react';

const Book = (props) => {
	const books = props.bookData.forEach((b) => {
		return (
			<div>
				<h1> {b.title}</h1>

				<p> Title: </p>
				<p> Author: </p>
			</div>
		);
	});

	return <div>{books}</div>;
};

export default Book;
