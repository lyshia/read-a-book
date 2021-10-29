# Read a Book

# Project Links

[github account](https://lyshia.github.com)

[deployed link coming soon]

# Motivation 

I buy a lot of books, but suck at reading them. I created this app as a way to get organized and motivate myself to read more. 

# Project Description

Users are able to search for books and then add them to a list for books to read. Once they are in the list, you can mark the book as read, and if the book is read you can write review and rate the book. If you are looking for inspiration for a book to read, you can randomly select a book from the list of unread books. 

# API

https://www.googleapis.com/books/v1/volumes?q=isbn:9780008236182

```
volumeInfo: {
title: "The Cat in the Hat",
authors: [
"Seuss"
],
... }
```

# Wireframes

[wireframe](https://imgur.com/a/ZWV7TMN)

[architecture](https://imgur.com/a/CB5hF7G)

# MVP/PostMVP

MVP

* Fully functional app where you can search and add books to your reading list
* navbar that allows users to go to different components 

Post MVP

* Reviews and ratings for each read book
* Randomly select a book to read from unordered list 


# Components

 Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Header | This will render the header include the nav | 
| Footer | This will render the header include the nav | 
| Book  | Book | 
| Book List | This will render the list of books |
| Book List Unread | This will show the unread books |
| Book List Read | This will show the read books |
| Book Search | This is where you can search to add books to your list | 
| Reviews | This will show the reviews of the read books |
| Random Book | This will select a random book out of your unread list |
| Footer | This will render the header include the nav | 

 Component | Priority | Estimated Time | Actual Time| 
| --- | :---: | :---:| :---: |
| Create app and add files | H  | 1 | hr |
| Routing | H | 1 | hr |
| Header / Footer | H | 1 | hr | 
| Styling | H | 3 | hr |
| sset up api calls | H | 1 | hr |
| Create book object and display information | H  | 2 | hr | 
| create a list of books that you can add/ remove books from  | H | 2 | hr |
| create a list of books that are unread | H | 2 | hr |
| create a list of books that are read  | H  | 2 | hr |
| create search function to add books to list  | H | 2 | hr |
| create review for books  | M | 2 | hr |
| create ratings for books | M | 2 | hr |
| create a random book to read from list  | M  | 2 | hr |



# Additional Libraries

Bootstrap

# Code Snippet

coming soon 
