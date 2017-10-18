"use strict";

var dom = require('./projectDom');
let projectRepo = [];

var projectData = function(){
	return new Promise(function(resolve, reject){
		$.ajax('https://api.github.com/users/hagansmith/repos').done(function(data){
      resolve(data);
		}).fail(function(error1){
			reject(error1);
		});
	});
};

var repoGetter = function(){
	projectData().then((results) => {
		results.forEach((result) => {
				projectRepo.push(result);

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

module.exports = {initializer, getProjectRepo};
