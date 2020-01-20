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
		
		
		 
		return (
		
			<Router  
			basename ={process.env.PUBLIC_URL}>
				<div className="App">
			
					<Header /> 
			
					<Route exact path={'/'} component={Homepage}/>
					<Route exact path={'/Projects'} component={Projects}/>
					<Route exact path={'/Contact'} component={Contact}/>
		
		
				</div>
			</Router>
		
	);
	}
}

export default App;
