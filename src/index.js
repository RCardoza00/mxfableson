import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScenathonWeb from './pages/ScenathonWeb';

export { default as ACTIONS } from './constants/actions';
export { default as EVENTS } from './constants/events';
export { default as LIFECYCLE } from './constants/lifecycle';
export { default as STATUS } from './constants/status';

ReactDOM.render(
	<Router>
		<Route path="/" component={App} >
			<Route path="/ScenathonWeb" component={ScenathonWeb}>
			</Route>
		</Route>
	</Router>,
	document.getElementById('root')
);


serviceWorker.unregister();
