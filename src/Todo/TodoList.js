import React from 'react';
import { connect } from 'react-redux';

class TodoList extends React.Component {
	render() {
		console.log(this.props.todos);
		const renderedTodos = this.props.todos.map((todo) => {
			return (
				<div className='item' key={todo.id}>
					<i className='sticky note outline'></i>
					<div className='content'>
						<div className='header'>
							<b>{`Todo Item ${todo.id + 1}:`}</b>
						</div>
						{todo.text}
					</div>
				</div>
			);
		});

		return (
			<React.Fragment>
				<div className='ui segment'>
					<h2 className='ui center aligned icon header'>
						<i className='circular tasks icon'></i>
						Todo List
					</h2>
					<div className='ui raised segment'>
						{/*Add Rendered List of Todo List Items Here */}
						{this.props.todos.length === 0 ? (
							<div>There are no Todos to Render</div>
						) : (
							<div className='ui celled list'>{renderedTodos}</div>
						)}
					</div>
				</div>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		todos: state.todos,
	};
};

export default connect(mapStateToProps)(TodoList);
