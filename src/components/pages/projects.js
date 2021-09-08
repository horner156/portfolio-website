import React from 'react';
import sass from "./sass.png";
import gulp from "./gulp.svg.png";
import react from "./react.png"
import java from "./java.png";
import csharp from "./csharplogo.png";
import c from "./clogo.png";



function Projects() {
return (
	
	
	<div className="container-fluid">

	
		<h1>
		Projects
		</h1>
		
		<p>&nbsp;</p>
		
		<p/>
		
		<h3>
		This Website
		</h3>
		
		<p>
		Web design is not my focus, but I created this website from scratch in Javascript. I used React, Gulp, Sass, and Bootstrap in the process of creating this website. Additionally, I familiarized myself with Github and Github pages in order to host this page online.
		</p>
		
		
		
		<img src={sass}width="5.5%"height="5.5%"hspace="15"alt=""/>
		<img src={gulp} width="2%"height="2%"alt=""/>
		<img src={react}width="8%"height="8%"alt=""/>
		
		<p/>
		<h3>
		School Assignments
		</h3>
		
		<p>
		At OSU, I have completed projects in various languages, both alone and as part of a team working within an Agile framework.
		
		
		</p>
			
		<img src={java}width="5%"height="5%"hspace="10"alt=""/>
		<img src={csharp}width="5%"height="5%"hspace="8"alt=""/>
		<img src={c}width="5%"height="5%"hspace="8"alt=""/>
		<p></p>
		<h4>
		Legend of Zelda: C#
		</h4>
		<p>
		As part of a team of 5 students, I helped create a remake of the first dungeon in Legend of Zelda for the NES. We used C# and our work was divided into sprints with the project requirements changing every 3 weeks. As a team, we had to determine our plan of action during our scrums and then complete the necessary work in a maintainable fashion so we could pivot when the next sprint began. Among other things, I was responsible for implementing the enemies, including their AI and behaviours.
		</p>
		
		<p>&nbsp;</p>
		
		<h4>
		Exploring AI: Java
		</h4>
		<p>
		Through 3 individual projects, I explored artificial intelligence concepts in Java. This culminated in creating a program that used Djikstra's Shortest Path Algorithm to find the optimal path for a Mars Rover to collect soil samples and return to base. I also created a program that followed a hill climbing algorithm to solve any sudoku game.
		</p>
		
		<p>&nbsp;</p>
		
		<h4>
		Mastering memory allocation, use of structs, void pointers in C
		</h4>
		<p>
		Throughout the course of a semester, I created a real time billiards simulation, complete with collisions, in C. This required the creation of linked list functionality, and a complete understanding  of memory allocation.
		</p>
		
		<p>&nbsp;</p>
		
	</div>
);
}

export default Projects;