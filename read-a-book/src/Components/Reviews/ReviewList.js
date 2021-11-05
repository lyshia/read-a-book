import React from 'react';

/// NOT FINISHED

const ReviewList = (props) => {
	console.log('props.reviewlist', props.reviewList);

	// console.log(props.reviewList[1].book.volumeInfo.title);

	const reviews = props.reviewList.map((rvw) => {
		console.log('review', rvw);

		return [
			<div>
				<p> Review: {rvw.review}</p>
			</div>,
		];
	});

	return (
		<div>
			<h1> Reviews</h1>
			{reviews}
		</div>
	);
};

export default ReviewList;
