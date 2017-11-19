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
