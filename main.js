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
		content: 'I would also tile this loops and what-how!? I can not say I fully understand the loops yet but I am getting there. I understand how they are constructed and what they do but I do not know that I could construct it all from scratch. More on this later...',
		date: 'July 29, 2017'
	},

	 {
		title: 'Week 4 | Java Script week 2',
		content: 'Or functions in functions in functions for days. School kicked my butt this week, and it is largely because I let up a bit and did not study as much as I should have. The hardest thing for me to comprehend right now is how functions work exactly. What is passing to what and how to pass the correct information from one funtion to another. I expect in a month or two I will be looking back and laughing that I struggled so much with this.',
		date: 'August 5, 2017 '
	},

	 {
		title: 'Week 5 | Git Hub Groups',
		content: 'Just dive in. That is the best way to get some things done. This week we worked in groups trying to break our group git repo. Not really but breaking it and fixing it early on is the goal. We intentionally caused some conflicts as a result of the way we worked on some projects. Having a good plan going in and being prepared helped us to avoid generating too many conflicts.',
		date: 'August 12, 2017'
	},

	{
		title: 'Week 6 | Markdown and Event Listeners',
		content: "Week 6 introduced markdown for updaing our git readme files. Lesson here, make and update your readme files as you go they are no fin to go back and update/add to after the fact. We continue to hack away at functions how they work and adding functionality via event listeners to our work. Functions are still not fully clear, specifically with respect to the arguments and what and when to pass information. I have moments of clarity followed by complete confusion follwed by frustration. One day I will laugh that I didn't get it.",
		date: 'August 19, 2017'
	},

	{
		title: 'Week 7 | XHR',
		content: "Just when you feel like you are starting to get it... nope! We added json files and XML requests to our knowledge. What was once stored in an array in our js files is now in a new file kind of looking like js but not, what an imposter. To add to our complexity we worked on requests for information from 2 files that then had to be 'linked' via vanilla js. Done and done, and on the plus side I feel pretty comfortable with functions now.",
		date: 'August 26, 2017'
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