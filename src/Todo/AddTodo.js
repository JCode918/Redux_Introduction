import React from 'react';
import { addTodo } from '../Actions';
import { connect } from 'react-redux';

class AddTodo extends React.Component {
	constructor(props) {
		super(props);
		let id = this.props.todos.length;
		this.state = { text: '', id };
	}

	// This on Change method will handle all changes to any input that may be added to this project down the road
	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleSubmission = (e) => {
		e.preventDefault();
		let { text, id } = this.state;
		this.props.addTodo(text, id);

		// Return the state to Initial State
		this.setState({ text: '', id: this.state.id + 1});
	};

	render() {
		return (
			<form onSubmit={this.handleSubmission}>
				<div className='ui fluid action input'>
					<input
						type='text'
						placeholder='Hmmm... what needs to be done today...'
						name='text'
						value={this.state.text}
						onChange={this.onChange}
					/>
					<button className='ui button' type='submit'>
						Add Todo
					</button>
				</div>
			</form>
		);
	}
}
// While this is not needed, I am checking the state to get the count of todo items
const mapStateToProps = (state, ownProps) => {
	return {
		todos: state.todos,
	};
};

export default connect(mapStateToProps, {
	addTodo: addTodo,
})(AddTodo);
