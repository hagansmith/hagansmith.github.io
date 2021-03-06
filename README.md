# hagansmith.github.io

## Synopsis
The individual bio site is a running project as a part of the NSS curriculum. Functionality and complexity are added as new topics are covered throughout the course, with the end goal of having a fully functional site at the end of the program.

## What to expect

This is a demo personal site developed from scratch with various pages containing different content pieces.

## Requirements

### Part 1
Create a two page site for your own personal branding. As we continue through the front-end milestones, we will add more features to this site, and it will eventually evolve into your personal portfolio site to share with employers. For now, focus on the structure of your HTML. (You may style to your heart's content but know that you can always update it later).
#### Pages
##### Professional history page
1. Each place you've worked must be contained in an article element.
1. Each article element should have a header that contains the name of the company and the dates of your employment.
1. Each article should contain at least one section that describes your position there.
1. No footer required for these articles.

##### Contact information page
1. One article.
1. A heading (e.g. "How to contact me").
1. Four sections that contain an email address, GitHub link and two social media URLs. (Bonus points if you use images to link to each of these).

#### Common page elements
##### Navigation
Create a navigation bar on each page that contains a link to both pages. You can use whatever elements you like for the navigation, but it must be contained in the appropriate HTML5 semantic element.
##### Page header
Each page should have an `<h1>` title contained in the appropriate HTML5 semantic tag.
##### Page footer
Each page should have the same footer information. Put whatever information you like in the footer.

### Part 2
1. Create 2 new HTML pages: Projects and About Me
1. Add links to these 2 new pages to your existing navigation bar.

Update your navigation bar with the following interactivity.

1. When the user hovers over one of the links, the color of the text should change.
1. When the user hovers over one of the links, the background color of the element that contains the link should change.
1. When the user clicks on one of the links, the element that contains the link should grow in size by 5px on the left and right.

### Part 3
1. Create 1 new HTML page: Blog
1. Add a link to this blog page in your existing navigation.
1. Create at least 5 blog entry "cards" for now. Each card should have:
   * A header section containing an H4 title and the date the blog was written.
   * A content section containing your body of text. These entries should be themed around your journey into development.
1. Your page should have cards 3 wide with a title, date, and content that wrap as new content is added using flexbox.

### Part 4

1. Create a main.js file and link to it in your blog.html
1. Create an html element with the id ‘blog-holder’
1. Make an array called blogs
1. Add each of your existing blogs to the blogs array by making them into objects with the following key, value pairs: title, content, date  (you should have at least 5 blog objects)
1. Loop over the blogs array and build up the HTML card elements using the values from your blog objects
1. Add the HTML you created in the last step to the blog-holder element
#### Final Result
  * HTML File:
	  * navbar
	  * blog-holder element
  * JS File
	  * An array with 5 blog objects
	  * variable that stores DOM container element
	  * Loop that iterates over the array, builds up a string, and then puts the string on the DOM

### Part 5

1. Open your main.js file and blog.html.
1. Create a JSON file that contains all the information for your blog posts Validate your JSON file.
1. Create an XHR to load the data from your local json file.
1. Loop over the blogs array returned from your XHR and build up the HTML card elements using the values from your blog objects.
1. Add the HTML you created in the last step to the blog-holder element.

    #### Final Result
    * HTML File:
    	* no change
    * JS File
    	* XHR now returns an array
    	* Loop that iterates over the array, builds up a string, and then puts the string on the DOM (from previous exercise).

### Personal Bio Site 6: Bootstrapping Your Personal Bio Site (Bootstrap)

1. Open your main.js file and blog.html.
1. Grid System: Use the grid system to display your blog entries. You should have 3 blog articles per row.
1. Bootstrap Nav Bar: Should contain 3 elements:
    1. Your "Logo" or personal bio site title
    1. Input bar to search your blog posts (Logic specs for this in a later step). NOTE: This should **only be visible** from the Nav Bar on your Blog Page.
    1. All of the links to your other pages on your website
1. Blog Page
    - The elements on this page should utilize the full width of the screen.
    - Update each of your blog posts so they all have a set height. Cut off any of the text that expands beyond the set height using some CSS. (Hint: checkout the overflow property).
    - Whenever the user clicks on a specific blog post card, that blog should appear in a special div (that spans all 12 columns) above all of the blog posts and should show the full content of the blog. When the user clicks on another blog post, it should replace the content of this special div with the content of the new blog post the user selected.

**Bonus**: Search
  - Whenever the user types in the search bar, it should filter the blog posts. EG: The user types in "abou", the only remaining blog cards showing should be ones where your content contains the string "abou" somewhere.
  - Add an array of "tags" to each of your blog post entries. These can be displayed on the card or not, your choice. Make it so the search function only applies to these tags. EG: The user types in "func", the only remaining blog cards showing should be ones where your tags array contains the string "func" at some index in the array.

### Part 7
1. ES6-ify your entire personal site. No more var. Fat Arrow functions anywhere you can use them. String template literals (${}).

### Personal Bio Site 8: Add Jquery to your Personal Bio

1.  Add Jquery to your project for any DOM manipulation.  

2.  None of the following should no longer exist in your project:
* document.getElementById
* XHRHttpRequest
* addEventListener
* parentNode
* childNode
* siblingNode
* any other dom traversal with the word node


3. You should make use of jquery things like:
* $.get
* .click
* .children
* .parent
* .sibling
* any other methods that strike your fancy

# Personal Bio Site 10: Add Firebase to your Personal Bio

1. In your Firebase Database, you should have a collection of blog posts and a collection of projects.
    - Your blog information should pull the data from the blog posts collection. The page should otherwise be the same as before.
1. Your project information should be displayed on your 'Projects' page.
    - Each project should have the at least the following: a screenshot, a discription, link to github.
    - If your project is deployed, you should link to the deployed site.
1. Make sure that you are not pushing up your Firebase Api Key
1.  Deploy your site to firebase

### How to view:
[View Page](https://hagansmith.github.io)
