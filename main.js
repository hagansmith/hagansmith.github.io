var blogs = [
	{
		title: 'Week 1 | The Gauntlet',
		content: 'Afer a little under a month of prework, online and in books, I was itiching to get going. Things started a little slower than expected but I figure I will be appreciating that later on. We jumpped into GIT and HTML this week with some CSS.',
		date: 'July 15, 2017'
	}, 
	
	{
		title: 'Week 2 | Terminal for Days',
		content: 'A certain comfort begins to arise afer initializing and pushing a bunch of repositories over and over again. The monotony of setting up even 5 repositories is mind numbing at this point. I am not a terminal pro, per-se, but my comfort level is higher than ever.',
		date: 'July 22, 2017'
	},

	{
		title: 'Week 3 | Java Script',
		content: 'I would also tile this loops and what-how!? I can not say I fully understand the loops yet but i am getting there. I understand how they are constructed and what they do but I do not know that I could construct it all from scratch. More on this later...',
		date: 'July 29, 2017'
	},

	 {
		title: 'Week 4 | Java Script week 2',
		content: 'Foo-Bar',
		date: 'August 5, 2017 '
	},

	 {
		title: 'Week 5 | Who Knows',
		content: 'FooBar',
		date: 'August 12, 2017'
	}
]

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

// console.log("Dom string from loop", domString);
document.getElementById('blog-holder').innerHTML += domString;

}