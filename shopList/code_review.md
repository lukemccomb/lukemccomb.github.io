# Code Review - 05/01/2014

## main.html

1.`<i><img src="images/logo.png"></i>` - The `<i>` tag is [deprecated](http://www.w3schools.com/Tags/tag_i.asp). If you want something in italics, use CSS. Curious why you want to italicize a pic though? 
1. `< div id="inst">` - This selector's name is not descriptive. I have no idea what it means ... Remember: there are three people who look at your code - yourself, your future self, others. Write for that audience.

## main.css

1. When you drop the `<i>` tag, make sure to update the css as well:

  ```css
  i {
  	width: auto;
  	height: auto;
  }
  i img {
  	max-width: 12%;
  	max-height: 12%;
  	border: 1px solid #000000;
  	border-radius: 2em;
  	padding: 1em;
  	box-shadow: .25em .25em 1em #32CD32;
  }
  ```
  
  You could just use replace `<i>` with `<span>` (and add an `<id>` to the it) or you could add an `<id>` to the image. Your call. The latter is probably the best, though.
  

## main.js

1. `Smells like updog in here` - ha! Nice easter egg!
2. What could you use besides an alert - `alert("What do you need?");` - for the error. See if you can add an `<div id="error></div>` to the HTML and then add text between the tags when an error occurs.


**Overall?** Looks great!! :)
