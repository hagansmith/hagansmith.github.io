"use strict";

require('./blog.js');
require('./navbar.js');
var project = require('./projects');

$(document).ready(function() {
	project.initializer();
});
