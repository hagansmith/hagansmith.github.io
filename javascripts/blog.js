"use strict";


const blogBuilder = (blogs) => {
  let blogString = '';
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

       blogString += domString ;
  }

  $('#blog-holder').html(blogString);

  let blogCount = $(".blog");
  //Blog Post Event listener
	for (let i = 0; i < blogCount.length; i++) {
		$(`#blog_${i}`).on("click", blogPost);
	}
};

//set the content of the top blog reader to the full text of the selected blog
let selectedBlog = $("#clickerText")[0];
const blogPost = (event) => {
	if ($(event.currentTarget).hasClass("blog")) {
		selectedBlog.innerHTML = event.target.offsetParent.innerHTML;
    $('#clickerText').removeClass('hidden');
	}
};

//Search Function
// $('#textField').keypress((event) => {
//   if (event.key === 'Enter') {
//     let txt = $('#textField').val();
//     let results = blogData.filter(function(thing){
//       return thing.name.indexOf(txt)>-1;
//     });
//     blogBuilder(results);
//   }
// });

module.exports = {blogBuilder};
