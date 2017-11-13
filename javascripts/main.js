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
