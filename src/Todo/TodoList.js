import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../Actions';

class TodoList extends React.Component {

	render() {
		console.log(this.props.todos);
		const renderedTodos = this.props.todos.map((todo) => {
			return (
				<div className='item' key={todo.id} onClick={() => this.props.toggleTodo(todo.id)}>
					<i
						className={`${
							todo.completed ? 'check' : ''
						} square outline icon`}></i>
					<div className='content'>
						<div className='header'>
							<b>{`Todo Item ${todo.id + 1}:`}</b>
						</div>
						<div className='description'>{todo.text}</div>
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
					<div>
						{/*Add Rendered List of Todo List Items Here */}
						{this.props.todos.length === 0 ? (
							<div className='ui icon message'>
								<i className='notched circle loading icon'></i>
								<div className='content'>
									<div className='header'>Add Tasks To Be Completed</div>
									<p>Allow me to keep you organized...</p>
								</div>
							</div>
						) : (
							<div className='ui raised segment'>
								{' '}
								<div className='ui celled list'>{renderedTodos}</div>
							</div>
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

export default connect(mapStateToProps, {
	toggleTodo: toggleTodo,
})(TodoList);
