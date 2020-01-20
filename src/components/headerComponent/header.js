import React from 'react';

import{ 
	Link
}from 'react-router-dom';


function Header() {
return (
	
		<header>
		<div className ="logo">
			<div className="name">
				Max Horner
			</div>
			
			<div className="student">
				Computer Science Student @ The Ohio State University
			</div>
		</div>
		
			<nav>
				<ul>
					<li className="first">
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/Projects">Projects</Link>
					</li>
					<li className="last">
						<Link to="/Contact">Contact</Link>
					</li>
				</ul>
			</nav>
		
		</header>
	
);
}

export default Header;
