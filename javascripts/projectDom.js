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
