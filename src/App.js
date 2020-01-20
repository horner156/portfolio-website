import React from 'react';
import{
	BrowserRouter as Router,
	Route,
	Link
}from 'react-router-dom';

//Components
import Header from'./components/headerComponent/header';

import Homepage from './components/pages/homePage';
import Projects from './components/pages/projects';
import Contact from './components/pages/contact';

//includes
import './Assets/CSS/default.css';

class App extends React.Component {
	
	
	render(){
		var p = process.env.PUBLIC_URL;
	return (
		<Router>
		<div className="App">
			
			<Header /> 
			<div>
				Hello, {p}!
			</div>
			<Route exact path={process.env.PUBLIC_URL + '/'} component={Homepage}/>
			<Route exact path={process.env.PUBLIC_URL +'/Projects'} component={Projects}/>
			<Route exact path={process.env.PUBLIC_URL +'/Contact'} component={Contact}/>
		
		
		</div>
		</Router>
	);
	}
}

export default App;