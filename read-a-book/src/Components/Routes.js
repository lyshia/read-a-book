import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Search from './Search/Search';
import BookList from './Books/BookList';
import Book from './Books/Book';
import Attributes from './Attributes/Attributes';
import Contact from './Contact';
import Random from './Random';
import ReviewList from './Reviews/ReviewList';

const Routes = () => {
	const [bookList, setBookList] = useState([]);
	const [reviewList, setReviewList] = useState([]);

	const addSearchBookToBookList = (book) => {
		setBookList([...bookList, book]);
	};

	const addReviewtoReviewList = (review, book) => {
		// setReviewList([...reviewList, review], [...bookList, book]);
		setReviewList([
			{review: [...reviewList, review]},
			{book: book},
		]);
	};

	return (
		<Switch>
			<Route
				path='/'
				exact
				render={(props) => (
					<Home
						{...props}
						addSearchBookToBookList={addSearchBookToBookList}
						book={bookList}
					/>
				)}
			/>
			<Route path='/About' component={About} />
			<Route path='/Attributes' component={Attributes} />
			<Route path='/Search' component={Search} />
			<Route path='/Contact' component={Contact} />

			<Route
				path='/Search'
				render={(props) => (
					<Search addSearchBookToBookList={addSearchBookToBookList} />
				)}
			/>
			<Route
				path='/BookList'
				render={(props) => <BookList book={bookList} />}
			/>
			<Route
				path='/Book/:id'
				render={(props) => (
					<Book
						{...props}
						book={bookList}
						addReviewtoReviewList={addReviewtoReviewList}
					/>
				)}
			/>
			<Route
				path='/ReviewList'
				render={(props) => <ReviewList {...props} reviewList={reviewList}  book={bookList}/>}
			/>
			<Route
				path='/Random'
				render={(props) => <Random {...props} book={bookList} />}
			/>
		</Switch>
	);
};

export default Routes;
