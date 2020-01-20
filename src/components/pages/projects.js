import React from 'react';
import sass from "./sass.png";
import gulp from "./gulp.svg.png";
import react from "./react.png"
import java from "./java.png";



function Projects() {
return (
	<div className="container-fluid">
	
	
		<h1>
		Projects
		</h1>
		
		<p/>
		
		<h3>
		This Website
		</h3>
		
		
		
		
		
		<p>
		I created this website from scratch in Javascript. I used React, Gulp, Sass, and Bootstrap in the process of creating this website. Additionally, I familiarized myself with Github and Github pages in order to host this page online.
		</p>
		
		
		
		<img src={sass}width="5.5%"height="5.5%"hspace="15"alt=""/>
		<img src={gulp} width="2%"height="2%"alt=""/>
		<img src={react}width="8%"height="8%"alt=""/>
		
		<p/>
		<h3>
		School Assignments
		</h3>
		
		<p>
		At OSU, I have completed many projects for my Computer Science classes. One of these projects was an 
		implementation of a Java Class to represent all Natural Numbers using String as the data representation.
		I have done many more projects at OSU and I would love to talk about the multitude of skills I have learned. If interested, please contact me.
		</p>
		
		<img src={java}width="5%"height="5%"hspace="8"alt=""/>
		
		
		
		
	</div>
);
}

export default Projects;