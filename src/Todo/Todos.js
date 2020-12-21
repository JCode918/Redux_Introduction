import React from 'react';
import AddTodo from './AddTodo';
import Filter from './Filter';
import TodoList from './TodoList';

class Todos extends React.Component {
	render() {
		return (
			<React.Fragment>
				<AddTodo />
				<TodoList />
				<Filter />
			</React.Fragment>
		);
	}
}

export default Todos;
