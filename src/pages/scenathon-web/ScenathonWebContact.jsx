import React, { Component } from 'react';

class ScenathonWebContact extends Component {
	render() {
		return (
			<React.Fragment>
				<h1 className="text-center text-white custom-font-size font-type">Contact</h1>
				<h1 className="text-center font-type" style={{ fontSize: '1.5vw' }}>External Relations, Communications, and Library</h1>
				<h1 className="text-center text-white">IIASA</h1>
				<p className="text-center text-white" style={{ fontSize: '1.5vw' }}>
					Schlossplatz 1
					<br></br>
					A-2361 Laxenburg
					<br></br>
					Austria
					<br></br>
					Tel.: (+43-2236) 807 0
					<br></br>
					Fax.: (+43-2236) 71313
					<br></br>
					E-mail: inf@iiasa.ac.at
					<br></br>
				</p >
			</React.Fragment >
		);
	}
}

export default ScenathonWebContact;