function blogsContent(){
	var blogsData = JSON.parse(this.responseText).blogs;
	blogBuilder(blogsData);
};

function executeThisCodeIfFileErrors(){
	console.log("XHR Blog Request Failed");
};

const blogBuilder = (blogs) => {
for (var i = 0;  i < blogs.length; i++) {
	var currentBlog = blogs[i];
	var domString = '';

	domString += 		'<section class="blog">';
  domString +=      '<div class="title">';
  domString +=        '<h4>' + currentBlog.title + '</h4>';
  domString +=      '</div>';
  domString +=      '<div class="date">';
  domString +=     ' <h6>' +  currentBlog.date + '</h6>';
  domString +=      '</div>';
  domString +=      '<div class="text">';
  domString +=        '<p>' + currentBlog.content + '</p>';
  domString +=      '</div>';
  domString +=   	'</section>';

	document.getElementById('blog-holder').innerHTML += domString;
	}
}

var myBlogs = new XMLHttpRequest();
myBlogs.addEventListener("load", blogsContent);
myBlogs.addEventListener("error", executeThisCodeIfFileErrors);
myBlogs.open("GET", "blog.json");
myBlogs.send();