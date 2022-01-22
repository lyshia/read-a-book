import React from "react";
import { Link } from "react-router-dom";
const About = () => {
    return (
        <div>
            <h1> About</h1>
            <p> This app was designed to help me manage my reading list </p>

            <h2>How to use </h2>
            <h3> Add a book to your list</h3>
            <ul>
                <li> On the homepage, search for a book using the search text</li>
                <li> Once you click search, find the book and click on the add symbol to add the book to your list</li>
                <li>Once the book is on your list, you can click on the book to view more information</li>
                <li>To mark the book as read, click on the book and then check "read"</li>
                <li> Currently this is not tied to a database, so it is session based. Updates to come soon.</li>
            </ul>
            <h3> How to view Reviews</h3>
            <ul>
                <li> Under Construction </li>
            </ul>
            <h3> Need help deciding what to read next?</h3>
            <ul>
                <li> After you have added books to your list</li>
                <li> Click on "Random" tab</li>
                <li> Your next great read will appear!</li>
            </ul>

            <h3> Other</h3>
            <p> <Link to='/Attributes'>Attributes </Link></p>
        </div>

    )
}

export default About;