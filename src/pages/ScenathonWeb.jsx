import React, { Component } from 'react';
import SwNavbar from '../components/SwNavbar';
import Slider from '../components/Slider';
import Home from '../pages/scenathon-web/ScenathonWebHome';
import Contact from '../pages/scenathon-web/ScenathonWebContact';
import {  HashRouter, Route, Switch, } from 'react-router-dom';
import '../css/index.css';

class ScenathonWeb extends Component {

	constructor(props) {
		super(props)
	}

	render() {
		return (
			<HashRouter hashType="noslash">
				<div className="img-background">
					<SwNavbar />
					<Slider style={{ width: '80%' }} />
					<div className="scenathon-container">
						<Switch>
							<Route path="/contact" component={Contact} />
							<Route path="/" component={Home} />
						</Switch>
					</div>
				</div>
			</HashRouter>
		);
	}
}

export default ScenathonWeb;