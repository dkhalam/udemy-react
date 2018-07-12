import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBhDsLAIszbACsoy9KRLtXMHS7SvFXl59A';
// Create a new component, this should produce some html
const App = () => {
	return (
		<div>
		<SearchBar />
	</div>
	);
}

// React should take component, generate HTML, put it on the page, and put it into the DOM
ReactDOM.render(<App />, document.querySelector('.container'));