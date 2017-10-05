"use strict";

let navBar = '';

	navBar += `<div class="jumbotron">`;
	navBar += `<h1 class ="text-center text-uppercase">Adam Smith</h1>`;
	navBar += `<nav class="text-center">`;
	navBar +=    `<li class= "btn btn-default"><a class="nav" href="index.html">History</a></li>`;
	navBar +=    `<li class= "btn btn-default"><a class="nav" href="contact.html">Contact</a></li>`;
	navBar +=    `<li class= "btn btn-default"><a class="nav" href="about_me.html">About Me</a></li>`;
	navBar +=    `<li class= "btn btn-default"><a class="nav" href="projects.html">Projects</a></li>`;
	navBar +=    `<li class= "btn btn-default"><a class="nav" href="blog.html">Blog</a></li>`;
	navBar += `</nav>`;
    if ($('title').html().split(" | ")[1] === "Blog") {
  navBar += `<br>`;
  navBar += `<label class="sr-only" for="blogSearch">Search Blog</label>`;
  navBar += `<input type="text" id="blogSearch" class="form-control" placeholder="Search Blog">`;
  }
	navBar += `</div>`;

$('#header').html(navBar);

//add active class to selected page
let nav = $('.nav');
  for (var i = 0; i < nav.length; i++) {
    // console.log($('.nav')[i].innerText);
    if (($('.nav')[i].innerText) === ($('title').html().split(" | ")[1])) {
     let btn = $('.nav')[i];
      $(btn).parent().addClass('active');
    }
  }

  module.exports = {};
