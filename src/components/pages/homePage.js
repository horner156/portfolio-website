import React from 'react';
import osuCSE from './osu-logo.jpg';


function Homepage() {
return (
	<div className="container-fluid">
	
	
		<h1>
		About Me
		</h1>
		
		<p>
		Hi, I'm Max. I started programming during my freshman year of highschool and as of right now I am 2 years from graduation at Ohio State. In highschool, I was president of the Computer Science Club,
		 where we taught new students of Computer Science the basics of Java. I am now seeking an internship where more experienced programmers will offer me the same type of guidance.
		 Most of my programming experience is in Java, but programming is a true passion of mine and I am dedicated to learning whatever it takes to be effective on the job. 
		I have always strived for academic excellence, and now that Computer Science is the basis of my education, I am dedicated to honing my skills in whatever ways possible. 
		</p>
		
		
		<div >
			<img src={osuCSE}height="25%"width="25%"className="cropimg"alt=""/>
		</div>
		
		
		
		
		
	</div>
);
}

export default Homepage;