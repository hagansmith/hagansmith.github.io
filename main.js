function blogsContent() {
	let blogsData = JSON.parse(this.responseText).blogs;
	blogBuilder(blogsData);
};

function executeThisCodeIfFileErrors(){
	console.log("XHR Blog Request Failed");
};

const blogBuilder = (blogs) => {
for (let i = 0;  i < blogs.length; i++) {
	let currentBlog = blogs[i];
	let domString = '';

	domString += 		`<section class="blog col-md-4 thumbnail" id="blog_${[i]}">`;
  domString +=      '<div class="title child">';
  domString +=        '<h4>' + currentBlog.title + '</h4>';
  domString +=      '</div>';
  domString +=      '<div class="date child ">';
  domString +=     ' <h6>' +  currentBlog.date + '</h6>';
  domString +=      '</div>';
  domString +=      '<div class="text child">';
  domString +=        '<p>' + currentBlog.content + '</p>';
  domString +=      '</div>';
  domString +=   	'</section>';

	document.getElementById('blog-holder').innerHTML += domString;
	}

	let blogCount = document.getElementsByClassName("blog");
	//Blog Post Event listener
	for (let i = 0; i < blogCount.length; i++) {
	  let blogId = (`blog_${i}`);
		document.getElementById(blogId).addEventListener("click", blogPost);
	}
};

let selectedBlog = document.getElementById('clickerText');
const blogPost = (event) => {
	if (event.target.offsetParent.classList.contains("blog")) {
		selectedBlog.innerHTML = event.target.offsetParent.innerHTML;
	}
};

let myBlogs = new XMLHttpRequest();
myBlogs.addEventListener("load", blogsContent);
myBlogs.addEventListener("error", executeThisCodeIfFileErrors);
myBlogs.open("GET", "blog.json");
myBlogs.send();
