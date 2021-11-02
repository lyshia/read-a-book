import React from  'react';
import BookList from './Books/BookList';
import Search from './Books/Search/Search';


const Home = () => {

    


    return (
        <div>
        <h1> Hello!</h1>
        <p> Lets read some books</p>
        <p> Search for a book to add to your read list!</p>
        <Search />

        
        </div>
    )

}

export default Home;