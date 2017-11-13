(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

//const tmdb = require('./tmdb.js');
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

let blogData = [];

$.get('../db/blog.json').done((blogsData) => {
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

},{}],3:[function(require,module,exports){
"use strict";

let firebaseKey = "";
let userUid = "";

const setKey = (key) => {
  firebaseKey = key;
};

// //Firebase: GOOGLE - Use input credentials to authenticate user.
//   let authenticateGoogle = () => {
//     return new Promise((resolve, reject) => {
//       var provider = new firebase.auth.GoogleAuthProvider();
//       firebase.auth().signInWithPopup(provider)
//         .then((authData) => {
//         	userUid = authData.user.uid;
//             resolve(authData.user);
//         }).catch((error) => {
//             reject(error);
//         });
//     });
//   };
//
const getBlogs = () => {
  return new Promise ((resolve, reject) => {
    $.ajax(`${firebaseKey.databaseURL}/blogs.json`).then((blogs) => {      
        resolve(blogs);
        console.log(blogs);
      }).catch((err) => {
        reject(err);
      });
  });
};
//
// const saveMoive = (movie) => {
//   movie.uid = userUid;
//   return new Promise((resolve, reject) => {
//       $.ajax({
//         method: "POST",
//         url: `${firebaseKey.databaseURL}/movies.json`,
//         data: JSON.stringify(movie)
//       }).then((result) => {
//         resolve(result);
//       }).catch((error) => {
//         reject(error);
//       });
//   });
// };
//
// const deleteMovie = (movieId) => {
//   return new Promise ((resolve, reject) => {
//     $.ajax({
//       method: "DELETE",
//       url: `${firebaseKey.databaseURL}/movies/${movieId}.json`,
//     }).then((fbMovie) => {
//       resolve(fbMovie);
//     }).catch((err) => {
//       reject(err);
//     });
//   });
// };
//
// const editMovie = (modifiedMovie, movieId) => {
//   modifiedMovie.uid = userUid;
//   return new Promise ((resolve, reject) => {
//     $.ajax({
//       method: "PUT",
//       url: `${firebaseKey.databaseURL}/movies/${movieId}.json`,
//       data: JSON.stringify(modifiedMovie)
//     }).then((edit) => {
//       resolve(edit)
//     }).catch((err)=> {
//       reject(err);
//     });
//   });
// };

module.exports = {setKey, getBlogs};

},{}],4:[function(require,module,exports){
"use strict";

require('./blog.js');
require('./navbar.js');
let apiKeys = require('./apiKeys.js');
let firebaseApi = require('./firebaseApi.js');
let project = require('./projects');

$(document).ready(function() {
	project.initializer();
});

apiKeys.retrieveKeys();
firebaseApi.getBlogs();

},{"./apiKeys.js":1,"./blog.js":2,"./firebaseApi.js":3,"./navbar.js":5,"./projects":7}],5:[function(require,module,exports){
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
      domStrang +=   `<h3>${repo.language}</h3>`;
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

const projectData = function(){
	return new Promise(function(resolve, reject){
		$.ajax('https://api.github.com/users/hagansmith/repos').done(function(data){
      resolve(data);
		}).fail(function(error1){
			reject(error1);
		});
	});
};

const repoGetter = function(){
	projectData().then((results) => {
		results.forEach((result) => {
				projectRepo.push(result);
		});
		makeRepos();
	}).catch(function(error){
		console.log("error from Promise.all", error);
	});
};

const makeRepos = function(){
  projectRepo.forEach(function(result){
    dom(result);
	});
};

const initializer = function(){
  repoGetter();
};

const getProjectRepo = function(){
	return projectRepo;
};

module.exports = {initializer, getProjectRepo};

},{"./projectDom":6}]},{},[4]);
