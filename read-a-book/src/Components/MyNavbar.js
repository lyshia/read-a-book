import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles/navbar.css';

const MyNavbar = () => {
	return (
		<Navbar bg='light' variant='dark' expand='lg' className='gradient'>
			<Container>
				<Navbar.Brand href='/'>Read a book</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='me-auto'>
						<Link to='/' className='link'>
							Home
						</Link>
						<Link to='/BookList' className='link'>
							My Books
						</Link>
						<Link to='/ReviewList' className='link'>
							My Reviews
						</Link>
						<Link to='/Random' className='link'>
							Random Book
						</Link>
						<Link to='/About' className='link'>
							About
						</Link>
						<Link to='/Contact' className='link'>
							Contact
						</Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default MyNavbar;
