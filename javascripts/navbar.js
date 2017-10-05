"use strict";


$('#header').html(`
	<div class="jumbotron">
	<h1 class ="text-center text-uppercase">Adam Smith</h1>
	<nav class="text-center">
			<li class= "btn btn-default nav"><a href="index.html">History</a></li>
			<li class= "btn btn-default nav"><a href="contact.html">Contact</a></li>
			<li class= "btn btn-default nav"><a href="about_me.html">About Me</a></li>
			<li class= "btn btn-default nav"><a href="projects.html">Projects</a></li>
			<li class= "btn btn-default nav"><a href="blog.html">Blog</a></li>
	</nav>
	</div>`);

//add active class to selected page
let nav = $('.nav');
  for (var i = 0; i < nav.length; i++) {
    if (($('.nav').children()[i].innerText) === ($('title').html().split(" | ")[1])) {
     let btn = $('.nav')[i];
      $(btn).addClass('active');
    }
  }

  module.exports = {};
