import React from 'react';
import NotesForm from './NotesForm';
import AllNotes from './AllNotes';

class Notes extends React.Component {
	render() {
		return (
			<div>
				<h1>React Redux Notes Application</h1>
				<NotesForm />
				<hr />
				<AllNotes />
			</div>
		);
	}
}

export default Notes;
