import React from  'react';
import BookList from './Components/Books/BookList';
// import BookList from './Books/BookList';
import Search from './Components/Search/Search';


const Home = (props) => {




    return (
			<div>
				<h1> Hello!</h1>
				<p> Lets read some books</p>
				<p> Search for a book to add to your read list!</p>
				<Search addSearchBookToBookList={props.addSearchBookToBookList} />

                <BookList />
                
			</div>




		);

}

export default Home;