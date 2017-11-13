"use strict";

require('./navbar.js');
let blog = require('./blog.js');
let apiKeys = require('./apiKeys.js');
let project = require('./projects');

$(document).ready(function() {
	project.initializer();
});

apiKeys.retrieveKeys();
