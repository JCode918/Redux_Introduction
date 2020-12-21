import React from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../Actions';

class Filter extends React.Component {
	handleClick = (e) => {
		setVisibilityFilter(e.target.name);
		console.log(this.props.active);
	};

	render() {
		console.log(this.props.active);
		return (
			<div className='ui placeholder segment'>
				<div className='ui icon header'>
					<i className='eye icon'></i>
					Visibility
				</div>
				<div className='inline'>
					{/*My solution to corrent this issue is to turn all these buttons into a reusable component that holds a state known as active */}
					{/*Created Fancy Button Import it into the project */}
					<button
						className='ui button'
						name='SHOW_ALL'
						onClick={this.handleClick}>
						All
					</button>
					<button className='ui button' filter='SHOW_ACTIVE'>
						Active
					</button>
					<button className='ui button' filter='SHOW_COMPLETED'>
						Completed
					</button>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	console.log(state);
	return {
		active: ownProps.filter === state.visibilityFilter,
	};
};

export default connect(mapStateToProps, {
	setVisibilityFilter: setVisibilityFilter,
})(Filter);
