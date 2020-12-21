export function addNote(title, content) {
	return { type: 'ADD_NOTE', title: title, content: content };
}

export function removeNote(id) {
	return { type: 'REMOVE_NOTE', id: id };
}

export function addTodo(text, id) {
	return {
		type: 'ADD_TODO',
		id: id,
		text: text,
		completed: false,
	};
}

export function setVisibilityFilter(filter) {
	return {
		type: 'SET_VISIBILITY_FILTER',
		filter: filter,
	};
}

export function toggleTodo(id) {
	return {
		type: 'TOGGLE_TODO',
		id,
	};
}
