
import './App.css';
import React, { useState } from 'react';
import Home from './Home';
import Search from './Components/Search/Search';
import BookList from './Components/Books/BookList'
import { Route } from 'react-router-dom';


function App() {
    const [bookList, setBookList] = useState([]);

      const addSearchBookToBookList = (book) => {
        setBookList([...bookList, book]);
        console.log( book, "added to book list");
      };    


      
	return (
		<div className='App'>
			<main>
				<Route path='/' exact component={Home} />
				<Route path='/Search' render={(props) => {
          <Search addSearchBookToBookList={addSearchBookToBookList} />
        }} />
				<Route
					path='/BookList'
					render={(props) => (
						<BookList {...props} addSearchBookToBookList={addSearchBookToBookList} />
					)}
				/>
			</main>
			<footer></footer>
		</div>
	);
}

export default App;
