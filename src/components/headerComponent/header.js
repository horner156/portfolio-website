import React from 'react';

import{ 
	Link
}from 'react-router-dom';


function Header() {
return (
	
		<header>
		
			<div className="logo">
				Max Horner, Computer Science Student @ The Ohio State University
			</div>
		
			<nav>
				<ul>
					<li className="first">
						<Link to="/portfolio-website/">Home</Link>
					</li>
					<li>
						<Link to="/portfolio-website/Projects">Projects</Link>
					</li>
					<li className="last">
						<Link to="/portfolio-website/Contact">Contact</Link>
					</li>
				</ul>
			</nav>
		
		</header>
	
);
}

export default Header;
