import React from 'react';
import SearchForm from './SearchForm';
import { Card, Button, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const BookList = ({ books, searchObj, setSearchObj }) => {

	if (!books) {
		return (
			<div className='margin'>
				<SearchForm searchObj={searchObj} setSearchObj={setSearchObj} />
				<div className='d-flex justify-content-center'>
					<Spinner animation='border' variant='primary' />
					<h6>Loading... Please Wait</h6>
				</div>
			</div>
		);
	}
	return (

		<div className='margin'>
			<div className='btnhome'>
			<Link to={'/#home'}>
					<Button id='btnlist'>Home</Button>
				</Link>
				</div>
			<SearchForm searchObj={searchObj} setSearchObj={setSearchObj} />
       <div className='cardcont'>
		   
				{books.map((book, i) => {
					return (
						<Card key={i} className='book-box card-cascade-narrower border-0'>
							<div className='row no-gutters'>
								<div className='col-md-4'>
									{book.volumeInfo.imageLinks && (
										<Card.Img src={book.volumeInfo.imageLinks.thumbnail} />
									)}
								</div>
								<div className='col-md-8'>
									<div className='card-body'>
										<h4>{book.volumeInfo.title}</h4>
										<br />
										{book.volumeInfo.authors &&
											book.volumeInfo.authors.map((author, i) => {
												return (
													<Card.Subtitle key={i} className='mb-2'>
														{author}
													</Card.Subtitle>
												);
											})}
										<br />
										{book.volumeInfo.categories && (
											<Card.Subtitle variant='secondary' size='sm'>
												{book.volumeInfo.categories[0]}
											</Card.Subtitle>
										)}
										<br />
										{book.volumeInfo.industryIdentifiers ? (
											<Link
												to={`/books/${book.volumeInfo.industryIdentifiers[0].identifier}`}>
												<Button id='btnlist'>Details</Button>
											</Link>
										) : null}
									</div>
								</div>
							</div>
						</Card>
					);
				})}
		</div>
		</div>

	);
};

export default BookList;
