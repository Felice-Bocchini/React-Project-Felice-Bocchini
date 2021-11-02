import React, { useState } from 'react';
import { Form, FormControl, Button, InputGroup } from 'react-bootstrap';

const SearchForm = ({ setSearchObj }) => {
	const initialState = {
		title: '',
		author: '',
	};
	const [formState, setFormState] = useState(initialState);
	const handleChange = (event) => {
		setFormState({ ...formState, [event.target.id]: event.target.value });
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		setSearchObj(formState);
		setFormState(initialState);
	};
	return (
		<div>
			<Form inline className='searchForm' onSubmit={handleSubmit}>
				<InputGroup>
					<FormControl
						onChange={handleChange}
						placeholder='Search by Title'
						id='title'
						aria-label='title'
						aria-describedby='basic-addon2'
						value={formState.title}
					/>
				</InputGroup>
				<InputGroup>
					<FormControl
						onChange={handleChange}
						placeholder='Search by Author'
						id='author'
						aria-label='author'
						aria-describedby='basic-addon2'
						value={formState.author}
					/>
				</InputGroup>
				<Button type='submit' id='btnlist'>
					Submit
				</Button>
				
			</Form>
		</div>
	);
};

export default SearchForm;
