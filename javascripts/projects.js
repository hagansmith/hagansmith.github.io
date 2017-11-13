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
