(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

let blogData = [];

$.get('../data/blog.json').done((blogsData) => {
  blogData = blogsData.blogs;
  blogBuilder(blogData);
	}).fail((error) => {
    console.log(error);
});

const blogBuilder = (blogs) => {
  let blogString = '';
  for (let i = 0;  i < blogs.length; i++) {
	   let currentBlog = blogs[i];
	    let domString = '';

	     domString += 		`<section class="blog col-md-4 thumbnail" id="blog_${[i]}">`;
       domString +=      '<div class="title child">';
       domString +=        '<h4>' + currentBlog.title + '</h4>';
       domString +=      '</div>';
       domString +=      '<div class="date child ">';
       domString +=     ' <h6>' +  currentBlog.date + '</h6>';
       domString +=      '</div>';
       domString +=      '<div class="text child">';
       domString +=        '<p>' + currentBlog.content + '</p>';
       domString +=      '</div>';
       domString +=   	'</section>';

       blogString += domString ;
  }

  $('#blog-holder').html(blogString);

  let blogCount = $(".blog");
  //Blog Post Event listener
	for (let i = 0; i < blogCount.length; i++) {
		$(`#blog_${i}`).on("click", blogPost);
	}
};

//set the content of the top blog reader to the full text of the selected blog
let selectedBlog = $("#clickerText")[0];
const blogPost = (event) => {
	if ($(event.currentTarget).hasClass("blog")) {
		selectedBlog.innerHTML = event.target.offsetParent.innerHTML;
    $('#clickerText').removeClass('hidden');
	}
};

//Search Function
// $('#textField').keypress((event) => {
//   if (event.key === 'Enter') {
//     let txt = $('#textField').val();
//     let results = blogData.filter(function(thing){
//       return thing.name.indexOf(txt)>-1;
//     });
//     blogBuilder(results);
//   }
// });

module.exports = {};

},{}],2:[function(require,module,exports){
"use strict";

require('./blog.js');
require('./navbar.js');
var project = require('./projects');

$(document).ready(function() {
	project.initializer();
});

},{"./blog.js":1,"./navbar.js":3,"./projects":5}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
"use strict";

var outputDiv = $('#projectDiv');

var domString = function(repo) {
  console.log('data at dom', repo);
	var domStrang = '';
      domStrang +=   `<div class="col-md-4 text-center repo" id=${repo.id}>`;
      domStrang +=   `<h1><a href=${repo.url}>${repo.name}</a></h1>`;
      domStrang +=   `<h3>${repo.language}</h3>`;
      domStrang +=   `</div>`;
	printToDom(domStrang);
};


var printToDom = function(strang) {
	outputDiv.append(strang);
};

module.exports = domString;

},{}],5:[function(require,module,exports){
"use strict";

var dom = require('./projectDom');
let projectRepo = [];

var projectData = function(){
	return new Promise(function(resolve, reject){
		$.ajax('https://api.github.com/users/hagansmith/repos').done(function(data){
      // console.log(data.name);
      resolve(data);
		}).fail(function(error1){
			reject(error1);
		});
	});
};

var repoGetter = function(){
	Promise.all([projectData()]).then(function(results){
		console.log("results from promise.all", results);
		results.forEach(function(result){
			result.forEach(function(repos){
				projectRepo.push(repos);
			});
		});
		makeRepos();
	}).catch(function(error){
		console.log("error from Promise.all", error);
	});
};

var makeRepos = function(){
  projectRepo.forEach(function(result){
    dom(result);
	});
};

var initializer = function(){
  repoGetter();
};

var getProjectRepo = function(){
	return projectRepo;
};

module.exports = {initializer:initializer, getProjectRepo:getProjectRepo};

},{"./projectDom":4}]},{},[2]);
