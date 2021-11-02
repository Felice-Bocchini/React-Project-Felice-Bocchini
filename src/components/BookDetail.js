import React, { useState, useEffect } from 'react';
import { Card, Button, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BookDetail = ({ match }) => {
	const [book, setBook] = useState(null);
	useEffect(() => {
		fetch(
			`https://www.googleapis.com/books/v1/volumes?q=isbn:${match.params.book}`
		)
			.then((res) => res.json())
			.then((res) => {
				setBook(res.items[0]);
			})
			.catch(console.error);
	}, [match]);
	if (book === null) {
		return (
			<div className='margin'>
				<br />
				<div className='d-flex justify-content-center'>
					<Spinner animation='border' variant='primary' />
				</div>
				<div>
					<h6>Loading... Please Wait</h6>
					
					<Link to={'/#home'}>
						<Button id='btnlist'>Home</Button>
					</Link>
				</div>
			</div>
		);
	}
	return (
		<div>
			<br />
			<br />
			<br />
			<div className='btnhome'>
			<Link to={'/#home'}>
					<Button id='btnlist'>Home</Button>
				</Link>
				</div>
			<Card className='book-box card-cascade-narrower detail'>
				{book.volumeInfo.previewLink && book.volumeInfo.imageLinks && (
					<a
						target='_blank'
						rel='noreferrer'
						href={book.volumeInfo.previewLink}>
						<Card.Img
							className='book-image'
							src={book.volumeInfo.imageLinks.thumbnail}
						/>
					</a>
				)}
				<div className='detailcont'>
				<h3>{book.volumeInfo.title}</h3>
				{book.volumeInfo.authors &&
					book.volumeInfo.authors.map((author, i) => {
						return (
							<li>
								{author}
							</li>
						);
					})}
					</div>
				<div className='infocont'>
				{book.volumeInfo.categories && (
					<h4>
						{book.volumeInfo.categories[0]}
					</h4>
				)}
				
				{book.volumeInfo.description && (
					<p>{book.volumeInfo.description}</p>
				)}
				{book.volumeInfo.publisher && (
					<p>
						Publisher: {book.volumeInfo.publisher}
					</p>
				)}
				{book.volumeInfo.publishedDate && (
					<p>
						Published Date: {book.volumeInfo.publishedDate}
					</p>
				)}
				<p>
					Page Count: {book.volumeInfo.pageCount}
				</p>
				</div>
				{book.volumeInfo.infoLink && (
					<a
						target='_blank'
						rel='noreferrer'
						href={book.volumeInfo.infoLink}
						className='d-flex justify-content-center'>
						<Button id='btnlist'>Purchase Now</Button>
					</a>
				)}
				<br />
				<div className='listbtn'>
				<Link to={'/books'}>
					<Button id='btnlist'>BookList</Button>
				</Link>
				
				</div>
			</Card>
			
		</div>
	);
};

export default BookDetail;
