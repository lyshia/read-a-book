import React from "react";
import { Link } from "react-router-dom";
const About = () => {
    return (
        <div>
            <h1> About</h1>
            <p> This app was designed to help me manage my reading list </p>

            <h2>How to use </h2>
            <h3> Add a book to your list</h3>
            <ol>
                <li> On the homepage, search for a book using the search text</li>
                <li> Once you click search, find the book and click on the add symbol to add the book to your list</li>
                <li>Once the book is on your list, you can click on the book to view more information</li>
                <li>To mark the book as read, click on the book and then check "read"</li>
                <li> Once the book is read, you can then leave a review </li>
            </ol>
            <h3> How to view Reviews</h3>
            <ol>
                <li> Click </li>
            </ol>
            <h3> Need help deciding what to read next?</h3>
            <ol>
                <li> Click on "Random" tab</li>
                <li> Your next great read will appear!</li>
            </ol>

            <h3> Other</h3>
            <p> <Link to='/Attributes'>Attributes </Link></p>
        </div>

    )
}

export default About;