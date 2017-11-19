(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

const firebaseApi = require('./firebaseApi.js');

const apiKeys = ( ) => {
  return new Promise ((resolve, reject) => {
    $.ajax('./db/apiKeys.json').done((data) => {
      resolve(data.apiKeys);
    }).fail((error) => {
      reject(error);
    });
  });
};

const retrieveKeys = () => {
  apiKeys().then((results) => {
    firebaseApi.setKey(results.firebaseKeys);
    firebase.initializeApp(results.firebaseKeys);
  }).catch((error) => {
    console.log('error in retrieve keys', error );
  });
};


module.exports = {retrieveKeys};

},{"./firebaseApi.js":3}],2:[function(require,module,exports){
"use strict";


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

module.exports = {blogBuilder};

},{}],3:[function(require,module,exports){
"use strict";

let blog = require("./blog.js");
let projects = require("./projects.js");

let firebaseKey = "";
let userUid = "";

const setKey = (key) => {
  firebaseKey = key;
  getBlogs();
  projectData();
};

const getBlogs = () => {
  return new Promise ((resolve, reject) => {
    $.ajax(`${firebaseKey.databaseURL}/blogs.json`).then((blogs) => {
        blog.blogBuilder(blogs);
        resolve(blogs);
      }).catch((err) => {
        reject(err);
      });
  });
};

const projectData = function(){
	return new Promise((resolve, reject) => {
		$.ajax(`${firebaseKey.databaseURL}/projects.json`).then((data) => {
        projects.repoGetter(data);
        resolve(data);
		}).catch((error1) => {
			  reject(error1);
		});
	});
};

module.exports = {setKey, firebaseKey, projectData};

},{"./blog.js":2,"./projects.js":7}],4:[function(require,module,exports){
"use strict";

require('./navbar.js');
let apiKeys = require('./apiKeys.js');

// $('#projectDiv').ready(function() {
// 	project.initializer();
// });

apiKeys.retrieveKeys();

},{"./apiKeys.js":1,"./navbar.js":5}],5:[function(require,module,exports){
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
    if (($('.nav')[i].innerText) === ($('title').html().split(" | ")[1])) {
     let btn = $('.nav')[i];
      $(btn).parent().addClass('active');
    }
  }


if  (($('title').html().split(" | ")[1]) === "History") {
  let topofDiv = $("#topBarMain").offset().top; //gets offset of header
  let height = $("#topBarMain").outerHeight(); //gets height of header

  $(window).scroll(function(){
      if($(window).scrollTop() > (topofDiv + (1/8)*height)){
         $(".jumbotron").slideUp();
  			 $("#topBarMain").addClass('change');
      }
      else{
         $(".jumbotron").slideDown();
  			 $("#topBarMain").removeClass('change');
      }
  });
}

  module.exports = {};

},{}],6:[function(require,module,exports){
"use strict";

let outputDiv = $('#projectDiv');

const domString = function(repo) {
	var domStrang = '';
      domStrang +=   `<div class="col-md-4 text-center repo" id=${repo.id}>`;
      domStrang +=   `<h1><a href=${repo.url}>${repo.name}</a></h1>`;
      domStrang +=   `<h3>${repo.description}</h3>`;
			domStrang +=   `<img src="${repo.screen_shot}">`;
      domStrang +=   `</div>`;
	printToDom(domStrang);
};


const printToDom = function(strang) {
	outputDiv.append(strang);
};

module.exports = domString;

},{}],7:[function(require,module,exports){
"use strict";

let dom = require('./projectDom');
let projectRepo = [];

const repoGetter = function(results){
		results.forEach((result) => {
				projectRepo.push(result);
		});
		makeRepos();
};

const makeRepos = function(){
  projectRepo.forEach(function(result){
    dom(result);
	});
};

const getProjectRepo = function(){
	return projectRepo;
};

module.exports = {repoGetter};

},{"./projectDom":6}]},{},[4]);
