import React from 'react';
import { Jumbotron, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const Home = () => {
	return (
		<div>
			<br />
			<Jumbotron fluid className='margin'>
				<Container>
					<h1>Welcome to "The Librarian"</h1>
					<h5>With this app you can search for books and get any 
						information about each one. Click on the button to start.</h5>

					<Link to='/books'>
						<Button id='btnlist'>Search</Button>
					</Link>
				</Container>
			</Jumbotron>

			<br />

			<br />
		</div>
	);
};

export default Home;
