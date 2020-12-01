import React, { Component } from 'react';
import SwNavbar from '../components/SwNavbar';
import '../css/index.css';

class ScenathonWeb extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
			<div className="img-background">
				

					<SwNavbar />
					<div className="row col-lg-12 text-white">
						<div className="col-lg-4 d-flex">
							<div className="col-lg-4-">
								<img src="http://via.placeholder.com/180x120" />
							</div>
							<div className="col-lg-8">The Leader the WTO needs.</div>
						</div>
						<div className="col-lg-4 d-flex">
						<div className="col-lg-4-">
								<img src="http://via.placeholder.com/180x120" />
						</div>
							<div className="col-lg-8">texto</div>
						</div>
						<div className="col-lg-4 d-flex">
						<div className="col-lg-4-">
							<img src="http://via.placeholder.com/180x120" />
						</div>
							<div className="col-lg-8">texto</div>
						</div>
					</div>
					<h1 className="text-center text-white custom-font-size">Scenathon</h1>
					<p className="text-center"></p>
			</div>
		);
	}
} 

export default ScenathonWeb;