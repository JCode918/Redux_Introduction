import React from 'react';
import { connect } from 'react-redux';
import { removeNote } from '../Actions/index';

class AllNotes extends React.Component {
	removeNote = (index) => {
		this.props.removeNote(index);
	};

	render() {
		const noteItems = this.props.notes.map((note, index) => {
			return (
				<li key={index}>
					<b>{note.title}</b>
					<button onClick={() => this.removeNote(index)}>X</button>
					<br />
					<span>{note.content}</span>
				</li>
			);
		});

		return (
			<React.Fragment>
				<h3>All Notes</h3>
				<ul>{noteItems}</ul>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		notes: state.notes,
	};
};
export default connect(mapStateToProps, {
	removeNote: removeNote,
})(AllNotes);
