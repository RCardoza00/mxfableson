import React, { Component } from 'react';
import SwNavbar from '../components/SwNavbar';
import Slider from '../components/Slider';
import '../css/index.css';

class ScenathonWeb extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
			<React.Fragment>
				<div className="img-background">
					<SwNavbar />
					<Slider style={{width: '80%'}}/>
					<div className="scenathon-container">
						<h1 className="text-center text-white custom-font-size font-type">Scenathon</h1>
						<p className="text-center font-type" style={{fontSize: '1.5vw'}}> Scenathons were conceived at IIASA as participatory decision-making exercises that integrate models, <br/> stakeholders, and technology to collectively solve complex, large-scale multi-objective problems.</p>
					</div>
				</div>
			</React.Fragment>
		);
	}
} 

export default ScenathonWeb;