import React from "react";
import { Container, Navbar, Nav} from "react-bootstrap";
import './navbar.css'


const MyNavbar = () => {

    return (
			<Navbar bg='light' variant='dark' expand='lg' className='gradient'>
				<Container>
					<Navbar.Brand href='#home'>Read a book</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='me-auto'>
							<Nav.Link href='/'>Home</Nav.Link>
							<Nav.Link href='/BookList'>My Books</Nav.Link>
							<Nav.Link href='/ReviewList' > My Reviews</Nav.Link>
                            <Nav.Link href='/'> Random book</Nav.Link>
                            <Nav.Link href='/About'>About</Nav.Link>
                            <Nav.Link href="/Contact"> Contact</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		);
}

export default MyNavbar;