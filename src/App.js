import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';



const App = () => {
	let [books, setBooks] = useState(null);
	const [searchObj, setSearchObj] = useState({
		title: '',
		author: '',
		isbn: '',
	});
	useEffect(() => {
		fetch(
			`https://www.googleapis.com/books/v1/volumes?&maxResults=25&q=${
				searchObj.title ? `intitle:${searchObj.title}&` : ''
			}
      ${searchObj.author ? `inauthor:${searchObj.author}&` : ''}
      ${searchObj.isbn ? `isbn:${searchObj.isbn}&` : ''}
      key=${process.env.REACT_APP_KEY}`
		)
			.then((res) => res.json())
			.then((res) => {
				setBooks(res.items);
			})
			.catch(console.error);
	}, [searchObj.title, searchObj.author, searchObj.isbn]);
	return (
		<div>
			<Header/>
			<main>
				<Switch>
					<Route
						exact
						path='/'
						render={(routerProps) => {
							return (
								<Home
									searchObj={searchObj}
									setSearchObj={setSearchObj}
									history={routerProps.history}
								/>
							);
						}}
					/>
					<Route
						exact
						path='/books'
						render={() => {
							return (
								<BookList
									books={books}
									searchObj={searchObj}
									setSearchObj={setSearchObj}
								/>
							);
						}}
					/>
					<Route
						path='/books/:book'
						render={(routerProps) => {
							return <BookDetail match={routerProps.match} />;
						}}
					/>
				</Switch>
			</main>

		</div>
	);
};

export default App;
