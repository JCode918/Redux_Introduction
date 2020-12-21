import React from 'react';
import Notes from '../Notes/Notes';
import Todos from '../Todo/Todos';

class App extends React.Component {
	render() {
		return (
			<div className='ui container'>
				<Notes />
				<hr />
				<h1 className='ui center aligned blue header'>React Redux Todo List</h1>
				<Todos />
			</div>
		);
	}
}

export default App;
