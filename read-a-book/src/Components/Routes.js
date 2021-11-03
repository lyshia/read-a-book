import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Search from './Search/Search';
import BookList from './Books/BookList';
import Book from './Books/Book';
import Attributes from './Attributes/Attributes'
import Contact from './Contact';

const Routes = () => {
	const [bookList, setBookList] = useState([]);

	const addSearchBookToBookList = (book) => {
		setBookList([...bookList, book]);
	};

	return (
		<Switch>
			<Route path='/' exact component={Home} />
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
				render={(props) => <BookList {...props} book={bookList} />}
			/>
			<Route
				path='/Book/:id'
				render={(props) => <Book {...props} book={bookList} />}
			/>
		</Switch>
	);
};

export default Routes;
