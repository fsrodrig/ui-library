import React from 'react';

class SharedComp extends React.Component {
	render () {
		return (
			<div style={{padding:30, backgroundColor: "red"}}>
				<h1>Shared Component 2</h1>
			</div>
		)
	}
}

export default SharedComp;