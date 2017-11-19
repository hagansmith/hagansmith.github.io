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
