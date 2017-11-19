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
