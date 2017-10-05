"use strict";

let navBar = '';
  navBar +=    `<li><a class="nav" href="index.html">History</a></li>`;
	navBar +=    `<li><a class="nav" href="contact.html">Contact</a></li>`;
	navBar +=    `<li><a class="nav" href="about_me.html">About Me</a></li>`;
	navBar +=    `<li><a class="nav" href="projects.html">Projects</a></li>`;
	navBar +=    `<li><a class="nav" href="blog.html">Blog</a></li>`;
    if ($('title').html().split(" | ")[1] === "Blog") {
			$('#textField').removeClass('hidden');
			$('#search').removeClass('hidden');
  }
$('.nav').html(navBar);

//add active class to selected page
let nav = $('.nav');
  for (var i = 0; i < nav.length; i++) {
    // console.log($('.nav')[i].innerText);
    if (($('.nav')[i].innerText) === ($('title').html().split(" | ")[1])) {
     let btn = $('.nav')[i];
      $(btn).parent().addClass('active');
    }
  }


var topofDiv = $("#topBar").offset().top; //gets offset of header
var height = $("#topBar").outerHeight(); //gets height of header

$(window).scroll(function(){
    if($(window).scrollTop() > (topofDiv + (1/8)*height)){
       $(".jumbotron").slideUp();
			 $("#topBar").addClass('change');
    }
    else{
       $(".jumbotron").slideDown();
			 $("#topBar").removeClass('change');
    }
});

  module.exports = {};
