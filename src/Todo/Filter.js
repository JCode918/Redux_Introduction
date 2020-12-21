import React from 'react';

class Filter extends React.Component {
	render() {
		return (
		 <div className="ui placeholder segment">
			 <div className="ui icon header">
				 <i className="eye icon"></i>
				 Visibility
			 </div>
			 <div className="inline">
				<div className="ui button">All</div>
				<div className="ui button">Active</div>
				<div className="ui button">Completed</div>
			 </div>

		 </div>
		);
	}
}

export default Filter;
